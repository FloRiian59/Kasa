import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ImgStyled = styled.img`
  width: 340px;
  height: 340px;
  border-radius: 10px;
  object-fit: cover;
`
const TitleStyled = styled.h3`
  position: absolute;
  bottom: 0px;
  left: 15px;
  color: white;
  font-size: 18px;
  font-weight: 700;
`
const CardStyled = styled(Link)`
  position: relative;
`
const Thumb = ({ logements }) => {
  return logements.map((logement) => (
    <CardStyled to={`/logement/${logement.id}`} key={logement.id}>
      <ImgStyled src={logement.cover} alt={logement.title} />
      <TitleStyled>{logement.title}</TitleStyled>
    </CardStyled>
  ))
}

Thumb.propTypes = {
  logements: PropTypes.array.isRequired,
}

export default Thumb
