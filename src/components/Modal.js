import React from 'react';
import styled from 'styled-components';

import { PiX } from 'react-icons/pi';

// Overlay
const ModalContainer = styled.div`
  background: rgba(0,0,0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Modal Content
const ModalContent = styled.div`
  padding: 20px;
  border-radius: 14px;
  background: #fff;
  color: #000;
  max-width: 500px;
  width: 100%;
  margin:  50px auto 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
`;

const HeadingStyled = styled.h2`
    margin: 0 0 10px 0;
    font-size: 20px;
    font-weight: 500;
`;

const CrossIcon = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: none;
    display: flex;
    align-items: center;
    position: absolute;
    right: 15px;
    cursor: pointer;
    :hover {
        color: red;
    }
`;

const Modal = ({ onClose, open, heading, children, footerComponent }) => {

    return (
        <>
            {open &&
                <ModalContainer>
                    <ModalContent>
                        <CrossIcon onClick={onClose}><PiX /></CrossIcon>
                        {heading &&
                            <HeadingStyled>{heading}</HeadingStyled>
                        }
                        <div>{children}</div>
                        {footerComponent &&
                            <div>
                                {footerComponent}
                            </div>
                        }
                    </ModalContent>
                </ModalContainer>
            }
        </>
    )
}

export default Modal;
