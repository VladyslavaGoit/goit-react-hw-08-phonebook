import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-bottom: 50px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > button {
    margin-left: auto;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 15px;
  & > input {
    height: 40px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    border-radius: 4px;
  }
`;
