import React, { useState } from "react";
import {storage, database} from "../firebase";

const FileUpload = (props) => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);

    const handleChange = e => {
      if (e.target.files[0]) {
          setImage(e.target.files[0]);
      }
    }

    function writeNewPost(uid, email, imageUrl) {
      // A post entry.
      var postData = {
        authorEmail: email,
        authorUid: uid,
        // body: body,
        // title: title,
        image: imageUrl,
        submittedDate: new Date(),
      };
    
      // Get a key for a new Post.
      var newPostKey = database.ref().child('posts').push().key;
    
      // Write the new post's data simultaneously in the posts list and the user's post list.
      var updates = {};
      updates['/posts/' + newPostKey] = postData;
      // updates['/user-posts/' + uid + '/' + newPostKey] = postData;
    
      return database.ref().update(updates,
        (error) => {
          if (error) {
            console.log(error)
          } else {
            console.log(postData)
          }
      });
    }

    const handleUpload = () => {
      const uploadTask = storage.child(`images/${image.name}`).put(image);
      uploadTask.on( "state_changed",
        snapshot => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(url => {
            writeNewPost(props.user.uid, props.user.email, url);
            setUrl(url);
          });
        }
      );
    };

    // console.log("image: ", image);



    return (
        <div>
            <progress value={progress} max="100" />
            <br />
            <br />
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
            <br />
            {url}
            <br />
            <img style={{maxWidth:300, maxHeight:300}} src={url || "http://via.placeholder.com/300"} alt="firebase-image" />
        </div>
    );
}


// render(<FileUpload/>, document.querySelector("#root"));
export default FileUpload