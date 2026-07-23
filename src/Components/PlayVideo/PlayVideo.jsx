import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from'../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const PlayVideo = ({videoId}) => {

  const [apiData,setApiData]=useState(null);

  const fetchVideoData =async() =>{
    //Fetching videos data
    const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetchVideoData(videoDetails_url).then(res=>res.json()).then(data=> setApiData(data.items[0]));
  }

  useEffect(()=>{
    fetchVideoData();
  },[])

  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoplay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      {/* "Title Here"=>if the title is not available */}
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
      <div className='play-video-info'>
        <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
          <span><img src={dislike} alt="" />2</span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>               
        </div>
      </div>
      <hr />
      < div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1m Subscribers</span>
        </div>
         <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe to GreatStack to watch more tutorials on web development</p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Michael Ebenezer <span>1 day ago</span></h3>
            <p>Clean code, great formatting, and excellent explanations here.</p>
          </div>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>244</span>
            <img src={dislike} alt="" />
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Michael Ebenezer <span>1 day ago</span></h3>
            <p>Clean code, great formatting, and excellent explanations here.</p>
          </div>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>244</span>
            <img src={dislike} alt="" />
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>Michael Ebenezer <span>1 day ago</span></h3>
            <p>Clean code, great formatting, and excellent explanations here.</p>
          </div>
          <div className="comment-action">
            <img src={like} alt="" />
            <span>244</span>
            <img src={dislike} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo