import styled from 'styled-components';

export const StyledConfigurationSection = styled.section`
  border-radius: 10px;
  width: 1060px;
  height: 656px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const StyledRightSideTimeRestrictions = styled.div`
  border-radius: 10px;
  width: 406px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledParameters = styled.div`
  background-color: ${({ theme }) => theme.Colors.grays[10]};
  width: 352px;
  height: 260px;
  border-radius: 10px;
`;
