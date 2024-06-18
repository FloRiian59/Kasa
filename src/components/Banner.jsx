import styled from 'styled-components'

export const SectionStyled = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
`
export const ContainerStyled = styled.div`
  width: 1240px;
  height: 223px;
  display: flex;
  @media (max-width: 1024px) {
    margin: 0px 30px 0px 30px;
  }
`
const ImageStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background-size: cover;
  background-image: url('../../src/assets/image/bgImage1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TitleStyled = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: 700;
  width: 100%;
  height: 100%;
  background-color: #0000007d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  @media (max-width: 1024px) {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`
function Banner() {
  return (
    <SectionStyled>
      <ContainerStyled>
        <ImageStyled>
          <TitleStyled>Chez vous, partout et ailleurs</TitleStyled>
        </ImageStyled>
      </ContainerStyled>
    </SectionStyled>
  )
}

export default Banner
