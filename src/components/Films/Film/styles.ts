import { styled } from "styled-components";

import { theme } from "variables";

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
  background-color: ${theme.colors.black};
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
  color: ${theme.colors.white};
  text-align: center;
  text-decoration: none;
  transition: color 1s;

  &:hover {
    h2 {
      color: ${theme.colors.primary};
    }
  }
`;

const Client = styled.div`
  color: ${theme.colors.primary};
  font-size: ${theme.size.sm}px;
  line-height: 1;
  letter-spacing: 0.38px;
  text-transform: uppercase;
  font-family: ${theme.fonts.OpenSansRegular}, sans-serif;
`;

const Category = styled.div`
  color: ${theme.colors.g100};
  font-size: ${theme.size.sm}px;
  line-height: 1;
  letter-spacing: 0.38px;
  text-transform: uppercase;
  font-family: ${theme.fonts.OpenSansSemiBold}, sans-serif;
`;

const Name = styled.h2`
  margin-top: 8px;
  margin-bottom: 8px;
  opacity: 1;
  font-size: ${theme.size.xl}px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: ${theme.fonts.ThunderExtraBoldlc}, sans-serif;
  color: ${theme.colors.white};
`;

export { Name, Category, Client, Link, Content, Wrapper, FilmImg, Img };
