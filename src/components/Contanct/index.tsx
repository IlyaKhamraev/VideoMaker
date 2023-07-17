import { styled } from "styled-components";

import { contacts } from "components/Contanct/contacts";
import { Wrapper } from "components/Wrapper";
import { theme } from "variables";

export const Contact = () => (
  <Wrapper>
    <>
      <Title>Get in touch</Title>
      <Subtitle>Don't hold back...</Subtitle>

      {contacts.map((contact) => (
        <div key={`${contact.text}_${contact.title}`}>
          <TitleLink>{contact.title}</TitleLink>
          <Link href={contact.link}>{contact.text}</Link>
        </div>
      ))}
    </>
  </Wrapper>
);

const Title = styled.h2`
  margin-top: 8px;
  margin-bottom: 20px;
  opacity: 1;
  font-size: ${theme.size.xl3}px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: ${theme.fonts.ThunderExtraBoldlc}, sans-serif;
  color: ${theme.colors.white};
  cursor: default;
`;

const Subtitle = styled.p`
  margin-bottom: 40px;
  font-size: ${theme.size.xl2}px;
  font-family: ${theme.fonts.ThunderExtraBoldlc}, sans-serif;
  color: ${theme.colors.white};
  cursor: default;
`;

const TitleLink = styled.p`
  margin-bottom: 10px;
  font-size: ${theme.size.xl2}px;
  font-family: ${theme.fonts.ThunderExtraBoldlc}, sans-serif;
  color: ${theme.colors.white};
  cursor: default;
`;

const Link = styled.a`
  margin-bottom: 20px;
  font-size: ${theme.size.sm}px;
  font-family: ${theme.fonts.OpenSansSemiBold}, sans-serif;
  color: ${theme.colors.white};
  transition: color 0.4s;

  &:hover {
    color: ${theme.colors.primary};
  }
`;
