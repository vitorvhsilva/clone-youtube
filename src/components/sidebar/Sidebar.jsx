import './Sidebar.css'
import Home from '../../assets/home.png'
import GameIcon from '../../assets/game_icon.png'
import AutoMobiles from '../../assets/automobiles.png'
import Sports from '../../assets/sports.png'
import Entertainment from '../../assets/entertainment.png'
import Tech from '../../assets/tech.png'
import Music from '../../assets/music.png'
import News from '../../assets/news.png'
import YunkVino from '../../assets/yunkvino.jpeg'
import Nemzzz from '../../assets/nemzzz.jpeg'
import TheBoy from '../../assets/theboy.jpg'
import Brent from '../../assets/brentfaiyaz.jpg'

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${ sidebar ? '' : 'small-sidebar'} `}>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={Home} alt="" /> <p>Home</p>
        </div>
        <div className="side-link">
          <img src={GameIcon} alt="" /> <p>Jogos</p>
        </div>
        <div className="side-link">
          <img src={AutoMobiles} alt="" /> <p>Automobilismo</p>
        </div>
        <div className="side-link">
          <img src={Sports} alt="" /> <p>Esportes</p>
        </div>
        <div className="side-link">
          <img src={Entertainment} alt="" /> <p>Entretenimento</p>
        </div>
        <div className="side-link">
          <img src={Tech} alt="" /> <p>Tecnologia</p>
        </div>
        <div className="side-link">
          <img src={Music} alt="" /> <p>Música</p>
        </div>
        <div className="side-link">
          <img src={News} alt="" /> <p>Notícias</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Inscrições</h3>
        <div className="side-link">
          <img src={YunkVino} alt="" /> <p>Yunk Vino</p>
        </div>
        <div className="side-link">
          <img src={TheBoy} alt="" /> <p>THE BOY</p>
        </div>
        <div className="side-link">
          <img src={Nemzzz} alt="" /> <p>Nemzzz</p>
        </div>
        <div className="side-link">
          <img src={Brent} alt="" /> <p>Brent Faiyaz</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
