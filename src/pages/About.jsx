import styled from 'styled-components'
import DefautBgImg from '../../src/assets/image/bgImage2.jpg'
import '../assets/style/About.css'
import AboutData from '../data/about.json'
import Collapse from '../components/Collapse'
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
  background-color: #00000040;
  position: absolute;
  border-radius: 25px;
  box-shadow: 0px 4px 4px 0px #00000040;
`
function About() {
  return (
    <div>
      <ContainerBanner>
        <BannerImgStyle src={DefautBgImg} alt="background" />
        <BannerStyle></BannerStyle>
      </ContainerBanner>
      {AboutData.map((index) => {
        // avec map on parcours le tableau 'AboutData' et pour chaque élément :
        return (
          <div key={index.id}>
            <Collapse content={index.content} title={index.title} />
          </div>
        )
      })}
    </div>
  )
}
export default About
