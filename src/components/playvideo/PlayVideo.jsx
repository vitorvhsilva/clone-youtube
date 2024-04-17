import './PlayVideo.css'
import Like from '../../assets/like.png'
import Deslike from '../../assets/dislike.png'
import Share from '../../assets/share.png'
import Save from '../../assets/save.png'
import UserProfile from '../../assets/user_profile.jpg'
import { useEffect, useState } from 'react'
import { API_KEY, value_converter } from '../../data'
import { useParams } from 'react-router-dom'

const PlayVideo = () => {

  const {videoId} = useParams()

  const [apiData, setApiData] = useState(null)
  const [channelData, setChannelData] = useState(null)
  const [commentData, setCommentData] = useState([])

  const fetchVideoData = async() => {
    const videoDetails_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(response => response.json()).then(data => setApiData(data.items[0]))
  }

  const fetchOtherData = async() => {
    const channelDetails_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channelDetails_url).then(response => response.json()).then(data => setChannelData(data.items[0]))

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then(response => response.json()).then(data => setCommentData(data.items))
  }

  useEffect(() => {
    fetchVideoData();
  }, [videoId])

  useEffect(() => {
    fetchOtherData();
  }, [apiData])

  return (
    <div className='play-video'>
      {/* <video src={Video1} controls autoPlay muted ></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h3>{apiData ? apiData.snippet.title:'Titulo'}</h3>
      <div className="play-video-info">
        <p>{apiData ? value_converter(apiData.statistics.viewCount):'23443'} Visualizações &bull;</p>
        <div>
          <span><img src={Like} alt="" /> {apiData?value_converter(apiData.statistics.likeCount):'999'}</span>
          <span><img src={Deslike} alt="" /></span>
          <span><img src={Share} alt="" /> Compartilhar</span>
          <span><img src={Save} alt="" /> Salvar</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url: UserProfile } alt="" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:''}</p>
          <span>{channelData ? value_converter(channelData.statistics.subscriberCount):'?'} Inscritos</span>
        </div>
        <button>Inscreva-se</button>
      </div>
      <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0, 250):'Descrição'}</p>
        <hr />
        <h4>{apiData?value_converter(apiData.statistics.commentCount):102} Comentários</h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <img src={Like} alt="" />
                  <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={Deslike} alt="" />
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default PlayVideo
