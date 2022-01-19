import styled from 'styled-components';

export const StyledLeftSideTimeRestrictions = styled.div`
  padding-top: 20px;
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  border-radius: 10px;
  width: 656px;
  height: 656px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const StyledLeftSideTimeRestrictionsHeader = styled.div`
  padding: 0 25px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  height: 60px;
  width: 100%;
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.Colors.grays[9]};
  & > :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 456px;
    height: 100%;
    border-right: 2px solid ${({ theme }) => theme.Colors.grays[9]};

    & > span {
      display: flex;
      align-items: center;
      height: 100%;
      width: 200px;
      & > span {
        margin-right: 10px;
      }
    }
    & > div {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      & > :nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        &: hover {
          cursor: pointer;
          & * {
            fill: ${({ theme }) => theme.Colors.grays[5]};
          }
        }
        & > div {
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          & > div {
            display: flex;
            align-items: center;
            justify-content: center;
            & > div {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 15px;
              height: 30px;
              & > svg {
                & > path {
                  fill: ${({ theme }) => theme.Colors.grays[6]};
                }
              }
            }
          }
        }
        & > :first-child {
          width: 20px;
          & > div {
            display: flex;
            justify-content: center;
            & > div {
              display: flex;
              justify-content: flex-end;
              & > svg {
                & > path {
                }
              }
            }
          }
        }
        & > :last-child {
          width: 15px;
          & > div {
            & > div {
              & > svg {
                height: 20px;
                width: 10px;
                margin: 0 2px;
                & > path {
                }
              }
            }
          }
        }
      }
      & > :nth-child(2) {
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 35px;
        &: hover {
          cursor: pointer;
          & * {
            fill: ${({ theme }) => theme.Colors.grays[5]};
          }
        }
        & > div {
          display: flex;
          justify-content: center;
          align-items: center;
          & > div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            & > svg {
              & > path {
              }
            }
          }
        }
      }
    }
  }
  & > :nth-child(2) {
    height: 100%;
    width: 200px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 5px;
    & > button {
      padding: 0px;
      width: 152px;
      & :hover {
        background-color: ${({ theme }) => theme.Colors.grays[4]};
      }
      & > span {
        font-size: 12px;
      }
    }
  }
`;
export const StyledLeftSideTimeRestrictionsHeaderChip = styled.span`
  width: 19px;
  height: 19px;
  text-align: center;
  background-color: ${({ theme }) => theme.Colors.grays[6]};
  border-radius: 50%;
  color: ${({ theme }) => theme.Colors.grays[10]};
`;

export const StyledLeftSideTimeRestrictionsBodyWithoutRestrictions = styled.div`
  width: 607px;
  height: 100%;
  background-color: ${({ theme }) => theme.Colors.grays[9]};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px;
  margin-top: 10px;
  border-radius: 10px;
  & * {
    fill: ${({ theme }) => theme.Colors.grays[6]};
  }
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100px;
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        & > div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  & span {
    width: 235px;
    height: 35px;
    font-size: 16px;
    text-align: center;
  }
`;
