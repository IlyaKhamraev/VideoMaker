import { FC } from "react";

import {
  Wrapper,
  LinkWrapper,
  FilmImg,
  Img,
  Client,
  Content,
  Name,
  Category,
} from "components/FilmsList/FilmItem/styles";

interface Props {
  id: number;
  promoImg: string;
  client: string;
  name: string;
  category: string;
}

export const FilmItem: FC<Props> = ({
  id,
  promoImg,
  client,
  name,
  category,
}) => (
  <Wrapper>
    <LinkWrapper to={`film/${id}`}>
      <FilmImg>
        <Img src={promoImg} alt="promo" />
      </FilmImg>
      <Content>
        <Client>{client}</Client>
        <Name>{name}</Name>
        <Category>{category}</Category>
      </Content>
    </LinkWrapper>
  </Wrapper>
);
