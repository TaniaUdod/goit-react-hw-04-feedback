import styled from 'styled-components';

export const FeedbackList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 8px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: #b3b3db;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    background-color: #a1a1c1;
  }
`;
