import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function InfoBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        (주)아스테라
        <br />
        대표자: 정재호
        <br />
        사업자번호: 255-87-01463
        <br />
        통신판매업: 서울서초-2929
        <br />
        대표전화 : 02-2135-1670
        <br />
        <br />
        서울특별시 서초구 서초대로 398 플래티넘타워 6층
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0;
`;

Styled.Container = styled.div`
  font-family: 'S-CoreDream';

  color: #ffffff;

  text-align: left;
  font-size: 0.8vw;
  line-height: 1.54;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 13px;
  }

  @media (max-aspect-ratio: 1/1) {
    font-size: 1.2vw;
    line-height: 1.68;
  }
`;
