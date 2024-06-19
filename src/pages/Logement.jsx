import { useParams } from 'react-router-dom'
import Logements from '../data/logements.json'
import '../assets/style/Logement.css'
import Collapse from '../components/Collapse'
import ArrowLeft from '../assets/image/arrow-left.png'
import ArrowRight from '../assets/image/arrow-right.png'
import Rating from '../components/Rating'
const LogementID = (id) => {
  return Logements.find((logement) => logement.id === id) // find va parcourir le tableau du fichier logement.json et renvoie le logement qui corespond a l'id du l'url (route)
}

function Logement() {
  const { id } = useParams() // Hook permetant d'accéder a l'url de la route
  const logement = LogementID(id)
  const tags = logement.tags
  const pictures = logement.pictures
  return (
    <div className="container">
      <div className="container-content">
        <div className="arrows">
          <img className="arrow-left" src={ArrowLeft} />
          <img className="arrow-right" src={ArrowRight} />
          <img className="logement-picture" src={pictures[0]} alt="Logements" />
        </div>
        <div className="main-content">
          <div className="container-description">
            <div className="logement-title">{logement.title}</div>
            <div className="logement-location">{logement.location}</div>
            <ul className="logement-tags">
              {tags.map((tag, index) => {
                return <li key={(tag, index)}>{tag}</li>
              })}
            </ul>
          </div>
          <div className="container-host-rating">
            <div className="container-host">
              <div className="host-name">{logement.host.name}</div>
              <img src={logement.host.picture} className="host-picture" />
            </div>
            <Rating note={logement.rating} />
          </div>
        </div>
        <div className="container-dropdowns">
          <div className="container-desc">
            <Collapse title="Description" content={logement.description} />
          </div>
          <div className="container-equip">
            <Collapse
              title="Équipements"
              content={logement.equipments.map((item, index) => {
                return <li key={(item, index)}>{item}</li>
              })}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Logement

//location, host.name & host.picture, description, rating, equipments, tags, pictures,
