import {
  Wrapper,
  Link,
  FilmImg,
  Img,
  Client,
  Content,
  Name,
  Category,
} from "components/Films/Film/styles";

export const Film = () => (
  <Wrapper>
    <Link href="#">
      <FilmImg>
        <Img
          src="https://uploads-ssl.webflow.com/5d71994f994c3aab41b95759/62da8c07e97efb1eeb5410bd_1920.webp"
          alt="promo"
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
