import { useParams } from 'react-router-dom'
import Logements from '../data/logements.json'
import '../assets/style/Logement.css'
import Collapse from '../components/Collapse'
const LogementID = (id) => {
  return Logements.find((logement) => logement.id === id)
}
function Logement() {
  const { id } = useParams()
  const logement = LogementID(id)
  const tags = logement.tags
  return (
    <div className="container">
      <div className="container-content">
        <img
          className="logement-picture"
          src={logement.pictures[0]}
          alt="Logements"
        />
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
            <div className="rating-stars">{logement.rating}</div>
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
