import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

export default function FloatBox({ src, menuPrice, menuName }) {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <Styled.MenuImage src={src} />
        <Styled.MenuInfo>{`${menuName} | ${menuPrice}원`}</Styled.MenuInfo>
      </Styled.Container>
    </Styled.Wrap>
  );
}
FloatBox.propTypes = {
  src: PropType.string.isRequired,
  menuPrice: PropType.number.isRequired,
  menuName: PropType.string.isRequired,
};

const Styled = {};

Styled.Wrap = styled.div``;

Styled.Container = styled.div`
  width: 32vw;
  max-width: 586px;

  height: calc(32vw * 0.5972);
  max-height: 350px;

  transform: translateY(-50%);

  object-fit: contain;
`;

Styled.MenuImage = styled.img`
  width: 100%;
`;

Styled.MenuInfo = styled.div`
  text-align: right;

  font-family: 'S-CoreDream-6';
  font-size: 1vw;
  line-height: 1.5;
  color: #222222;
`;