import {darken, rgba} from 'polished';
import PropTypes from 'prop-types';
import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';
import {GlobalStylesTheme} from '../GlobalStyles';

const loadingAnimation = css`
  @keyframes loading {
    0% {
      background-position-x: 0;
    }
    40%,
    100% {
      background-position-x: -200%;
    }
  }
`;

const loadingStyles = css`
  animation: 2s ease-in-out loading infinite;
  background-image: linear-gradient(
    110deg,
    ${GlobalStylesTheme.light} 73%,
    ${darken(0.025, GlobalStylesTheme.light)} 75%,
    ${GlobalStylesTheme.light} 77%,
    ${GlobalStylesTheme.light} 78%,
    ${darken(0.025, GlobalStylesTheme.light)} 84%,
    ${darken(0.025, GlobalStylesTheme.light)} 88%,
    ${GlobalStylesTheme.light} 94%,
    ${GlobalStylesTheme.light} 100%
  );
  background-position: 0 center;
  background-size: 200% 100%;
`;

const wrapperStyles = css`
  backface-visibility: hidden;
  border: 3px solid transparent;
  color: ${GlobalStylesTheme.white};
  display: block;
`;

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
  ${loadingAnimation}
  color: ${GlobalStylesTheme.white};
  position: relative;
  z-index: 1;

  :empty {
    ::after {
      ${loadingStyles}
      animation-delay: 50ms;
      content: '';
      display: block;
      height: 24px;
      margin-bottom: ${GlobalStylesTheme.paragraphsMarginBottom};
      width: 92%;
    }

    ::before {
      ${loadingStyles}
      content: '';
      display: block;
      height: 28px;
      margin-bottom: ${GlobalStylesTheme.headingsMarginBottom};
      width: 100%;
    }
  }
`;

const Container = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const Figure = styled.figure`
  ${loadingAnimation}
  height: 100%;
  left: 0;
  margin: 0;
  position: absolute;
  top: 0;
  width: 100%;

  :empty {
    ${loadingStyles}
  }
`;

const Header = styled.header`
  bottom: 0;
  left: 0;
  padding: 15px 15px 0;
  position: absolute;
  right: 0;
  top: auto;

  ::before {
    background-image: linear-gradient(to bottom, transparent, ${rgba(GlobalStylesTheme.dark, .8)} 60%);
    bottom: -2px;
    content: '';
    height: 150%;
    left: 0;
    position: absolute;
    right: 0;
  }
`;

const TileWrapper = styled.div`
  ${wrapperStyles}
`;

const TileLink = styled(Link)`
  ${wrapperStyles}
  cursor: pointer;
  transition: background-color, border-color, color;
  transition-duration: .3s;
  transition-property: background-color, border-color, color;

  :hover {
    border-color: ${GlobalStylesTheme.primary};
    color: ${GlobalStylesTheme.white};
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

function Tile ({children, loading = true, src, to}) {
  function displayImage () {
    return (
      <Figure>
        {!loading && <Image src={src} />}
      </Figure>
    );
  }

  const tile = (
    <Article>
      <Container>
        {src && displayImage()}

        <Header>
          <Content>{!loading && children}</Content>
        </Header>
      </Container>
    </Article>
  );

  if (to) {
    return (
      <TileLink to={to}>{tile}</TileLink>
    );
  }

  return (
    <TileWrapper>{tile}</TileWrapper>
  );
}

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  src: PropTypes.string,
  to: PropTypes.string
};

Tile.defaultProps = {
  loading: true,
  src: null,
  to: null
};

export default memo(Tile);
