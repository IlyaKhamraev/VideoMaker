import { styled } from "styled-components";

import { theme } from "variables";

export const Contact = () => {
  return (
    <>
      <Title>Get in touch</Title>

      <Subtitle>Don't hold back...</Subtitle>

      <div>
        <p>personal</p>
        <Link href="mailto:">@raudsepp</Link>
      </div>

      <div>
        <p>instagram</p>
        <Link href="https://instagram.com/robertsframes">
          instagram.com/robertsframes
        </Link>
      </div>

      <div>
        <p>youtube</p>
        <Link href="https://www.youtube.com/robertraudsepp">
          youtube.com/robertraudsepp
        </Link>
      </div>

      <div>
        <p>telegram</p>
        <Link href="https://t.me/robraudsepp">t.me/robraudsepp</Link>
      </div>
    </>
  );
};

const Title = styled.h2`
  margin-top: 8px;
  margin-bottom: 20px;
  opacity: 1;
  font-size: ${theme.size.xl}px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: ${theme.fonts.ThunderExtraBoldlc}, sans-serif;
  color: ${theme.colors.white};
`;

const Subtitle = styled.p`
  margin-bottom: 40px;
  font-size: ${theme.size.xl}px;
  font-family: ${theme.fonts.ThunderExtraBoldlc}, sans-serif;
  color: ${theme.colors.white};
`;

const Link = styled.a`
  margin-bottom: 20px;
  font-size: ${theme.size.xl}px;
  font-family: ${theme.fonts.ThunderExtraBoldlc}, sans-serif;
  color: ${theme.colors.white};
  transition: color 0.4s;

  &:hover {
    color: ${theme.colors.primary};
  }
`;
