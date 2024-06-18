/* eslint-disable react/prop-types */
import { useState } from 'react'

const Collapse = ({ title, content }) => {
  //Déclaration du state du Hook
  const [isOpen, setIsOpen] = useState(false) // Valeur par défaut = false

  const display = () => {
    setIsOpen(!isOpen) // on définis setOpen comme étant l'inverse de setIsOpen (setIsOpen = false | isOpen = true)
  }
  return (
    // On affiche le collapse 'replié' par défaut et on l'ouvre au clique
    <div className="about-container">
      <div className="collapse-container">
        <div className="collapse-dropdown">
          <h2 className="collapse-title">{title}</h2>
          <button onClick={display}>
            {isOpen ? ( // condition de l'état du chevron, si le contenue est affiché chevron vers le haut, sinon chevron vers le bas
              <i className="fa-solid fa-chevron-up"></i>
            ) : (
              <i className="fa-solid fa-chevron-down"></i>
            )}
          </button>
        </div>
        {isOpen && ( // on affiche le contenue quand isOpen est égal à true
          <div className="frame">
            <p className="collapse-content">{content}</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default Collapse
