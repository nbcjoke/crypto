import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;
export const Modal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;

  @media screen and (min-width: 350px) and (max-width: 639px) {
    max-width: 289px;
    padding: 1rem;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalCloseButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: 0.3;
  cursor: pointer;
  border: none;
`;

export const ModalTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;

export const ModalPrice = styled.h2`
  margin-top: 35px;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;

export const ModalFormContainer = styled.form`
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  gap: 25px;
  flex-direction: column;

  @media screen and (min-width: 350px) and (max-width: 639px) {
    margin-top: 25px;
    gap: 20px;
  }
`;

export const ModalInput = styled.input`
  width: 250px;
  border-radius: 5px;
  font-size: 16px;
  padding: 8px 10px;
`;
