import { useParams } from 'react-router-dom'
import Logements from '../data/logements.json'
import '../assets/style/Logement.css'
import Collapse from '../components/Collapse'
import ArrowLeft from '../assets/image/arrow-left.png'
import ArrowRight from '../assets/image/arrow-right.png'
import Rating from '../components/Rating'
import { useState } from 'react'
const LogementID = (id) => {
  return Logements.find((logement) => logement.id === id) // find va parcourir le tableau du fichier logement.json et renvoie le logement qui corespond a l'id du l'url (route)
}

function Logement() {
  const { id } = useParams() // Hook permetant d'accéder a l'url de la route
  const logement = LogementID(id)
  const tags = logement.tags
  const pictures = logement.pictures
  const [slide, setSlide] = useState(0)
  const length = pictures.length
  const nextSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1)
  }
  const prevSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1)
  }

  return (
    <div className="container">
      <div className="container-carrousel">
        <div className="carrousel">
          <div className="slides">
            {pictures.map((item, index) => {
              return (
                <img
                  src={item}
                  alt="logements"
                  key={index}
                  className={slide === index ? 'slide' : 'slide-hidden'}
                />
              )
            })}
            {length > 1 && (
              <span className="slide-number">
                {slide + 1}/{pictures.length}
              </span>
            )}
            {length > 1 && (
              <img className="arrow-left" src={ArrowLeft} onClick={prevSlide} />
            )}
            {length > 1 && (
              <img
                className="arrow-right"
                src={ArrowRight}
                onClick={nextSlide}
              />
            )}
          </div>
        </div>
      </div>
      <div className="container-informations">
        <div className="container-content">
          <div className="title-location-tags">
            <div className="logement-title">{logement.title}</div>
            <div className="logement-location">{logement.location}</div>
            <div className="tags-rating">
              <ul className="logement-tags">
                {tags.map((tag, index) => {
                  return <li key={(tag, index)}>{tag}</li>
                })}
              </ul>
            </div>
          </div>
          <div className="container-host-rating">
            <div className="container-host">
              <div className="host-name">{logement.host.name}</div>
              <img src={logement.host.picture} className="host-picture" />
            </div>
            <Rating note={logement.rating} />
          </div>
        </div>
      </div>
      <div className="container-dropdowns">
        <div className="dropdowns">
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
