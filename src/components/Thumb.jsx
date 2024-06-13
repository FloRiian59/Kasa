import PropTypes from 'prop-types'
import styled from 'styled-components'

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
const CardStyled = styled.div`
  position: relative;
`
const Thumb = ({ datas }) => {
  return datas.map((data) => (
    <CardStyled key={data.id}>
      <ImgStyled src={data.cover} alt={data.title} />
      <TitleStyled>{data.title}</TitleStyled>
    </CardStyled>
  ))
}

Thumb.propTypes = {
  datas: PropTypes.array.isRequired,
}

export default Thumb
