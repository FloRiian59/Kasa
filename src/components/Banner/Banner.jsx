import * as S from "./Banner.style";

const Banner = (props) => {
  return (
    <>
      <div className="banner">{props.title}</div>
      <S.BannerText>Banner</S.BannerText>
      <S.BannerTextAlt>Banner</S.BannerTextAlt>
    </>
  );
};

export default Banner;
