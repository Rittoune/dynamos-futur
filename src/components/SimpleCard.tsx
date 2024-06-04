import React, { MouseEventHandler, ReactElement, ReactNode } from "react";
import styled, { css } from "styled-components";

const Main = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;
  z-index: 1;
`;

const Corner = css`
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
`;

const CornerTL = styled.div`
  ${Corner}
  top: 0;
  left: 0;
  border-left: 4px solid #0ee7e0;
  border-top: 4px solid #0ee7e0;
`;

const CornerTR = styled.div`
  ${Corner}
  top: 0;
  right: 0;
  border-right: 4px solid #0ee7e0;
  border-top: 4px solid #0ee7e0;
`;

const CornerBL = styled.div`
  ${Corner}
  bottom: 0;
  left: 0;
  border-left: 4px solid #0ee7e0;
  border-bottom: 4px solid #0ee7e0;
`;

const CornerBR = styled.div`
  ${Corner}
  bottom: 0;
  right: 0;
  border-right: 4px solid #0ee7e0;
  border-bottom: 4px solid #0ee7e0;
`;

const SubTitle = styled.h2`
  font-size: 1em;
  color: #0ee7e0;
`;

const SimpleCard: React.FC<{
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}> = ({ children, onClick, ...props }) => {
  return (
    <Main onClick={onClick} {...props}>
      <CornerTL />
      <CornerTR />
      <CornerBL />
      <CornerBR />
      {children}
    </Main>
  );
};

export default SimpleCard;
