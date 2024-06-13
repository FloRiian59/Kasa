import styled from 'styled-components'
import DefautBgImg from '../../src/assets/bgImage1.jpg'

const ContainerBanner = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
`

const BannerImgStyle = styled.img`
  width: 1240px;
  height: 223px;
  object-fit: cover;
  border-radius: 25px;
  position: absolute;
`
const BannerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1240px;
  height: 223px;
  background-color: #00000087;
  position: absolute;
  border-radius: 25px;
  box-shadow: 0px 4px 4px 0px #00000040;
`
const BannerTextStyle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  position: absolute;
  color: white;
`
function Banner() {
  return (
    <ContainerBanner>
      <BannerImgStyle src={DefautBgImg} alt="background" />
      <BannerStyle>
        <BannerTextStyle>Chez vous, partout et ailleurs</BannerTextStyle>
      </BannerStyle>
    </ContainerBanner>
  )
}

export default Banner
