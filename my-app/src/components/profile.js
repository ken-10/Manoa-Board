import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import {database} from "../firebase";
import Gallery from './gallery';

const Profile = (props) => {
  const postsRef = database.ref('posts').orderByChild('authorUid').equalTo(props.user.uid);
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    postsRef.on('value', (snapshot) => {
      if (snapshot.exists()) {
        const postsObj = snapshot.val();
        const postsArr = [];
        for (const key in postsObj) {
          postsArr.push({
            postKey: key,
            authorEmail: postsObj[key].authorEmail,
            authorUid: postsObj[key].authorUid,
            image: postsObj[key].image,
            submittedDate: postsObj[key].submittedDate,
          })
        }
        setPosts(postsArr)
        console.log(posts);
      } else {
        console.log("No data available");
      }
    })
  }, []) 
  return !posts ? null : (
    <div >
      <Gallery data={posts}/>
    </div>
  );
}

export default Profile;