import styled from 'styled-components'
import '../assets/style/About.css'
import AboutData from '../data/about.json'
import Collapse from '../components/Collapse'
import { SectionStyled } from '../components/Banner'
import { ContainerStyled } from '../components/Banner'
import { TitleStyled } from '../components/Banner'
const ImageStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background-size: cover;
  background-image: url('../../src/assets/image/bgImage2.jpg');
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
function About() {
  return (
    <div>
      <SectionStyled>
        <ContainerStyled>
          <ImageStyled>
            <TitleStyled style={{ backgroundColor: '#0000001a' }}></TitleStyled>
          </ImageStyled>
        </ContainerStyled>
      </SectionStyled>
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
