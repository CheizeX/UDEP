import styled from 'styled-components';
import { PredefinidedTextsInterface } from '../../ChatsSection/ChatsSection.interface';
import { IContainerBox } from './PreDefinedMessages.interface';

export const StyledPredefinidedWrapper = styled.div`
  display: flex;
`;
export const StyledPreDefinedMessages = styled.div<PredefinidedTextsInterface>`
  visibility: ${({ showPredefinedTexts }) =>
    showPredefinedTexts ? 'visible' : 'hidden'};
  width: 350px;
  position: absolute;
  height: max-content;
  bottom: 60px;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.Colors.grays[8]};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 460px;
  & > div {
    width: 100%;
    height: 100%;
    & > button {
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 30px;
      border-radius: 5px;
      padding-left: 5px;
      justify-content: space-between;
      & > span {
        margin-left: 5px;
        line-height: 12px;
        text-align: initial;
      }
      &:hover {
        background-color: ${({ theme }) => theme.Colors.grays[9]};
        cursor: pointer;
        & > span {
          color: ${({ theme }) => theme.Colors.purples[2]};
        }
        & svg {
          background-color: ${({ theme }) => theme.Colors.purples[2]};
        }
      }
      & > div {
        height: fit-content;
        padding-right: 30px;
        & div {
          display: flex;
          justify-content: center;
          align-items: center;
          & * {
            fill: ${({ theme }) => theme.Colors.grays[9]};
          }
          & svg {
            background-color: ${({ theme }) => theme.Colors.grays[6]};
            height: 20px;
            width: 20px;
            padding: 2px;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;
export const StyledBoxText = styled.span`
  max-width: 510px;
`;

export const StyledBoxCategory = styled.div<IContainerBox>`
  position: relative;
  height: 100%;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.Colors.grays[8]};
  top: -34px;
  & > div {
    visibility: ${({ isText, showPredefinedTexts }) =>
      !isText && showPredefinedTexts ? 'visible' : 'hidden'};
    position: absolute;
    left: calc(100% + 20px);
    ${({ setIndex }) => (setIndex > 12 ? null : `top: -40px`)}
    top: -64px;
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    border-radius: 10px;
    width: max-content;
    height: fit-content;
    min-height: 30px;
    padding: 0 4px;
    border: 10px solid transparent;
    display: flex;
    flex-direction: column;
    & > div {
      & > button {
        display: flex;
        border-radius: 5px;
        width: 100%;
        justify-content: space-between;
        min-height: 30px;
        padding-left: 5px;
        text-align: center;
        display: flex;
        align-items: center;
        &:hover {
          background-color: ${({ theme }) => theme.Colors.grays[9]};
          cursor: pointer;
          & > span {
            color: ${({ theme }) => theme.Colors.purples[2]};
          }
          & svg {
            background-color: ${({ theme }) => theme.Colors.purples[2]};
          }
        }
        & > div {
          min-width: 26px;
          height: fit-content;
          padding-right: 30px;
          text-align: center;
          & div {
            display: flex;
            justify-content: center;
            align-items: center;
            & * {
              fill: ${({ theme }) => theme.Colors.grays[9]};
            }
            & svg {
              background-color: ${({ theme }) => theme.Colors.grays[6]};
              height: 20px;
              width: 20px;
              padding: 2px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
`;

export const StyledButtonOption = styled.button`
  cursor: pointer;
  & > div {
    display: flex;
    flex-direction: column;
    min-height: 30px;
  }
`;

export const TooltipTextMessage = styled.span`
  width: 100%;
  cursor: pointer;
`;

export const TooltipBoxMessage = styled.div`
  position: absolute;
  top: calc(100% + 20px);
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 100%;
  max-width: 200px;
  padding: 5px 5px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: '';
    width: 0;
    height: 0;
    left: 40px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;

export const StyledCardText = styled.div<IContainerBox>`
  position: relative;
  top: -34px;
  box-shadow: 0px 0px 5px ${({ theme }) => theme.Colors.grays[8]};
  z-index: 1;
  & > div {
    position: absolute;
    left: calc(100% + 20px);
    ${({ setIndex }) => (setIndex > 12 ? null : `top: -40px`)}
    top: -80px;
    background-color: ${({ theme }) => theme.Colors.grays[10]};
    border-radius: 10px;
    width: max-content;
    height: fit-content;
    min-height: 30px;
    max-width: 540px;
    padding: 5px 5px;
    border: 10px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div {
      display: flex;
      justify-content: space-between;
      position: relative;
      & ${TooltipTextMessage}:hover + ${TooltipBoxMessage} {
        visibility: visible;
        color: #fff;
        background-color: ${({ theme }) => theme.Colors.purples[3]};
        z-index: 1;
        width: 100%;
        padding: 8px 8px;
        &:before {
          border-color: transparent transparent
            ${({ theme }) => theme.Colors.purples[3]}
            ${({ theme }) => theme.Colors.purples[3]};
        }
      }
      & > :nth-child(1) {
        display: flex;
        border-radius: 5px;
        max-width: fit-content;
        min-height: 40px;
        padding-left: 5px;
        text-align: center;
        display: flex;
        align-items: center;
        &:hover {
          background-color: ${({ theme }) => theme.Colors.grays[9]};
          cursor: pointer;
          & > span {
            color: ${({ theme }) => theme.Colors.purples[2]};
          }
          & svg {
            background-color: ${({ theme }) => theme.Colors.purples[2]};
          }
        }

        & > div {
          height: fit-content;
          padding-right: 30px;
          text-align: center;
          & div {
            display: flex;
            justify-content: center;
            align-items: center;
            & * {
              fill: ${({ theme }) => theme.Colors.grays[9]};
            }
            & svg {
              background-color: ${({ theme }) => theme.Colors.grays[6]};
              height: 20px;
              width: 20px;
              padding: 2px;
              border-radius: 50%;
            }
          }
        }
      }

      & > :nth-child(2) {
        border-radius: 5px;
        text-align: initial;
        padding: 8px;
        button {
          cursor: pointer;
        }
        &:hover {
          background-color: ${({ theme }) => theme.Colors.grays[9]};
          & > span {
            color: ${({ theme }) => theme.Colors.purples[2]};
          }
          & svg {
            background-color: ${({ theme }) => theme.Colors.purples[2]};
          }
        }
        & > span {
          margin-left: 5px;
          padding: 2px;
          width: 100%;
        }
      }
    }
  }
`;
