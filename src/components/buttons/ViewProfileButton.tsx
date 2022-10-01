import React from "react";

import styled from "styled-components";

type ButtonProps = {
  handleClick: () => void;
};

const ViewProfileButton = styled.button`
  width: 40px;
  height: 28px;

  @media screen and (min-width: 350px) and (max-width: 639px) {
    padding: 0;
  }
`;

const Image = styled.img``;

export const ViewProfileButtonComponent = (props: ButtonProps) => {
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.handleClick();
  };

  return (
    <ViewProfileButton onClick={(event) => clickHandler(event)}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g data-name="briefcase simple" id="briefcase_simple">
          <path d="M20,5H17V4a3,3,0,0,0-3-3H10A3,3,0,0,0,7,4V5H4A3,3,0,0,0,1,8V20a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8A3,3,0,0,0,20,5ZM9,4a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V5H9ZM4,7H20c2.28,0,.65,6-4,6H13a1,1,0,0,0-2,0H8C3.36,13,1.72,7,4,7ZM20,21H4a1,1,0,0,1-1-1V12.89C5.4,15.34,7.86,15,11,15a1,1,0,0,0,2,0c3.17,0,5.61.33,8-2.11V20A1,1,0,0,1,20,21Z" />
        </g>
      </svg>
    </ViewProfileButton>
  );
};
