import { useParams } from 'react-router-dom'
import Logements from '../data/logements.json'
import styled from 'styled-components'

const ContainerImgStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const ImageStyled = styled.img`
  display: flex;
  width: 1240px;
  height: 415px;
  object-fit: cover;
  border-radius: 25px;
`
const ContainerTextStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 100px;
`
const TitleStyled = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #ff6060;
  margin: 0;
`
const SubTitleStyled = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
`
const TagStyled = styled.li`
  height: 15px;
  width: fit-content;
  min-width: 115px;
  display: flex;
  background-color: #ff6060;
  color: white;
  border-radius: 10px;
  padding: 5px;
  justify-content: center;
`
const TagContainerStyled = styled.ul`
  display: flex;
  gap: 15px;
  padding: 0;
`
const LogementID = (id) => {
  return Logements.find((logement) => logement.id === id)
}

function Logement() {
  const { id } = useParams()
  const logement = LogementID(id)
  const tags = logement.tags
  return (
    <div>
      <ContainerImgStyled>
        <ImageStyled src={logement.pictures[0]} alt="LALA" />
      </ContainerImgStyled>
      <ContainerTextStyled>
        <TitleStyled>{logement.title}</TitleStyled>
        <SubTitleStyled>{logement.location}</SubTitleStyled>
        <TagContainerStyled>
          {tags.map((tag, index) => {
            return <TagStyled key={(tag, index)}>{tag}</TagStyled>
          })}
        </TagContainerStyled>
      </ContainerTextStyled>
    </div>
  )
}
export default Logement

//location, host.name & host.picture, description, ratin, equipments, tags, pictures,
