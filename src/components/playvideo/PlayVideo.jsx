import './PlayVideo.css'
import Video1 from '../../assets/video.mp4'
import Like from '../../assets/like.png'
import Deslike from '../../assets/dislike.png'
import Share from '../../assets/share.png'
import Save from '../../assets/save.png'
import UserProfile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={Video1} controls autoPlay muted ></video>
      <h3>Lorem ipsum dolor sit amet consectetur.</h3>
      <div className="play-video-info">
        <p>12323 Visualizacoes &bull; 2 Dias Atras</p>
        <div>
          <span><img src={Like} alt="" /> 125</span>
          <span><img src={Deslike} alt="" /> 2</span>
          <span><img src={Share} alt="" /> Compartilhar</span>
          <span><img src={Save} alt="" /> Salvar</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={UserProfile} alt="" />
        <div>
          <p>GreatStack</p>
          <span>1M Inscritos</span>
        </div>
        <button>Inscreva-se</button>
      </div>
      <div className="vid-description">
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, cupiditate!</p>
        <hr />
        <h4>130 Comentarios</h4>

        <div className="comment">
          <img src={UserProfile} alt="" />
          <div>
            <h3>User Name <span>1 Dia Atras</span> </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat voluptatibus hic ab voluptas illum!</p>
            <div className="comment-action">
              <img src={Like} alt="" />
              <span>244</span>
              <img src={Deslike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={UserProfile} alt="" />
          <div>
            <h3>UserName <span>1 Dia Atras</span> </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat voluptatibus hic ab voluptas illum!</p>
            <div className="comment-action">
              <img src={Like} alt="" />
              <span>244</span>
              <img src={Deslike} alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={UserProfile} alt="" />
          <div>
            <h3>UserName <span>1 Dia Atras</span> </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat voluptatibus hic ab voluptas illum!</p>
            <div className="comment-action">
              <img src={Like} alt="" />
              <span>244</span>
              <img src={Deslike} alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PlayVideo
