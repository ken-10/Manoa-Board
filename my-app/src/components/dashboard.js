import React, {useEffect, useState} from 'react';
import {database} from "../firebase";
import Gallery from './gallery';

const Dashboard = () => {
  const postsRef = database.ref('posts').orderByChild('submittedDate');
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
      } else {
        console.log("No data available");
      }
    })
  }, []) 
  return !posts ? null : (
    <div >
      <h1 style={{textAlign: 'center'}}>Public Posts</h1>
      <Gallery data={posts}/>
    </div>
  );
}

export default Dashboard;