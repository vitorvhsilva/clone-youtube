import { useParams } from 'react-router-dom'
import PlayVideo from '../../components/playvideo/PlayVideo'
import Recommended from '../../components/recommended/Recommended'
import './Video.css'

const Video = () => {

  const {videoId, categoryId} = useParams();

  return (
    <div className='play-container' >
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video
