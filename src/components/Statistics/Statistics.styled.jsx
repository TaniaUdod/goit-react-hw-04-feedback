import styled from 'styled-components';

export const StatisticsList = styled.ul`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
export const StatisticsItem = styled.li`
  margin: 12px 0;
  font-size: 18px;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
