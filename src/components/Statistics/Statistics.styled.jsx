import styled from '@emotion/styled';
import { theme } from 'constants';

export const StatsCard = styled.section`
  margin-top: ${theme.sizing(3)};
  padding-top: ${theme.sizing(5)};
`;
export const StatsTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  color: ${theme.colors.StatsTitle};
  text-align: center;
  padding-bottom: ${theme.sizing(3)};
`;
export const StatsList = styled.ul`
  margin: auto;
  width: 300px;
  display: flex;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StatsItem = styled.li`
  flex-basis: calc((100% - 5px) / 4);
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid ${theme.colors.statsBorder};
  color: ${theme.colors.white};
`;
export const Statslabel = styled.span`
  font-size: 12px;
`;
export const Percentage = styled.span``;
