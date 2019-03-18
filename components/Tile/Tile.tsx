import Link from 'next/link';
import {rgba} from 'polished';
import React, {memo, ReactNode} from 'react';
import styled from 'styled-components';
import {GlobalStylesTheme} from '../../core/GlobalStyles';

const Article = styled.article`
  background-color: ${GlobalStylesTheme.light};
  overflow: hidden;
  padding-top: 100%;
  position: relative;
  width: 100%;

  ::after {
    background-image: linear-gradient(to left, transparent, ${GlobalStylesTheme.primary} 51%, transparent);
    bottom: 0;
    content: '';
    height: 1px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    width: 80%;
    z-index: 10;
  }

  ::before {
    background-image: linear-gradient(to left, transparent, ${GlobalStylesTheme.primary} 51%, transparent);
    content: '';
    height: 1px;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 80%;
    z-index: 10;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const Figure = styled.figure`
  height: 100%;
  left: 0;
  margin: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Header = styled.header`
  bottom: 0;
  left: 0;
  padding: 15px 15px 0;
  position: absolute;
  right: 0;
  top: auto;

  ::before {
    background-image: linear-gradient(to bottom, transparent, ${rgba(GlobalStylesTheme.light, .9)} 60%);
    bottom: -2px;
    content: '';
    height: 150%;
    left: 0;
    position: absolute;
    right: 0;
  }
`;

const TileLink = styled.a`
  backface-visibility: hidden;
  border: 3px solid transparent;
  color: ${GlobalStylesTheme.bodyColour};
  cursor: pointer;
  display: block;
  transition: background-color, border-color, color;
  transition-duration: .3s;
  transition-property: background-color, border-color, color;

  :hover {
    border-color: ${GlobalStylesTheme.primary};
    color: ${GlobalStylesTheme.bodyColour};
  }
`;

const Image = styled.img`
  backface-visibility: hidden;
  height: auto;
  left: 0;
  position: absolute;
  top: 0;
  transition-duration: .3s;
  transition-property: all;
  transition-timing-function: ease-out;
  width: 100%;

  ${TileLink}:hover & {
    transform: scale(1.1);
  }
`;

interface ITileProps {
  as?: string;
  children: ReactNode;
  href: string;
  src?: string;
}

function Tile ({as, children, href, src}: ITileProps) {
  function displayImage () {
    return (
      <Figure>
        <Image src={src} />
      </Figure>
    );
  }

  return (
    <Link as={as} href={href} passHref={true}>
      <TileLink>
        <Article>
          <Container>
            {src && displayImage()}

            <Header>
              <Content>{children}</Content>
            </Header>
          </Container>
        </Article>
      </TileLink>
    </Link>
  );
}

export default memo(Tile);
