import Banner from '../components/Banner'
import Thumb from '../components/Thumb'
import logements from '../../src/data/logements.json'
import styled from 'styled-components'

const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
`
const GaleryStyled = styled.div`
  display: grid;
  grid-template-columns: 340px 340px 340px;
  background-color: #f6f6f6;
  width: 1240px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  gap: 50px;
  padding-top: 50px;
  padding-bottom: 50px;
`
function Home() {
  return (
    <div>
      <Banner />
      <ContainerStyled>
        <GaleryStyled>
          <Thumb logements={logements} />
        </GaleryStyled>
      </ContainerStyled>
    </div>
  )
}
export default Home
