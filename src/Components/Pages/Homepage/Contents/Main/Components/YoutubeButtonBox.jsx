/* eslint-disable no-await-in-loop */
import React, { useState } from 'react';
import styled from 'styled-components';

import ModalVideo from 'react-modal-video';

import ImgBtnGetStarted from '../Images/BtnGetStarted.svg';
import ImgBtnMediumShadow from '../Images/BtnGetStartedShadow.svg';

export default function YoutubeButtonBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Wrap>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="SHjQAM1b9kY"
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <Styled.Container
        type="button"
        className="btn-box"
        aria-label="Trial Eatple"
        tabIndex="0"
        onClick={() => {
          setIsOpen(true);
        }}
        onKeyDown={() => {
          setIsOpen(true);
        }}
      >
        <div className="button-image">
          <Styled.ImageBox src={ImgBtnGetStarted} />
        </div>
        <div className="button-shadow">
          <Styled.ImageBox src={ImgBtnMediumShadow} />
        </div>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  padding-top: 10%;
  margin-bottom: 0;
`;

Styled.Container = styled.button`
  position: relative;

  width: 10vw;
  max-width: 207px;
  height: calc(10vw * 0.3);
  max-height: 66px;

  .button-image {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    transition: all 0.5s;

    z-index: 2;
  }

  .button-image:hover {
    transform: translate(-0.4vw, -0.4vw) !important;
  }

  .button-shadow {
    position: absolute;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;

    z-index: 1;
  }
`;

Styled.ImageBox = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${props => {
    return `url(${props.src})`;
  }};

  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;
