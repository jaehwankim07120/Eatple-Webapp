import React from 'react';
import styled from 'styled-components';

import ImgHero from '../Images/imgHero@2x.jpg';

export default function BackgroundImg() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.ImageBox />
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 65%;
  height: 100%;

  z-index: -1;
`;

Styled.Container = styled.div`
  float: right;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;
Styled.ImageBox = styled.div`
  min-width: 100%;
  height: 100%;

  background-image: url(${ImgHero});
  background-size: cover;
`;
