import { styled } from "styled-components";

export const Film = () => {
  return (
    <Wrapper>
      <Link href="#">
        <FilmImg>
          <Img
            src="https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/62da8c07e97efb1eeb5410bd_1920.webp"
            alt=""
          />
        </FilmImg>
        <Content>
          <Client>Ninja Tune</Client>
          <Name>Bicep Global LS II | Saatchi Gallery</Name>
          <Category>Live Stream</Category>
        </Content>
      </Link>
    </Wrapper>
  );
};

const Img = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  object-fit: cover;
`;

const FilmImg = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  border-radius: 2px;
  background-color: #1e1e1e;
`;

const Wrapper = styled.li`
  position: relative;
`;

const Content = styled.div`
  position: relative;
  display: block;
  margin-top: 12px;
`;

const Link = styled.a`
  position: relative;
  z-index: 200;
  display: block;
  color: #fff;
  text-align: center;
  text-decoration: none;
`;

const Client = styled.div`
  color: #ffc93a;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.38px;
  text-transform: uppercase;
`;

const Category = styled.div`
  color: #a5a5a5;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 0.38px;
  text-transform: uppercase;
`;

const Name = styled.h2`
  margin-top: 8px;
  margin-bottom: 8px;
  opacity: 1;
  font-size: 12px;
  line-height: 1.25;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
