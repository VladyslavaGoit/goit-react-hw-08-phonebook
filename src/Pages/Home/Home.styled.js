import styled from 'styled-components';

export const Section = styled.section`
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url('https://images.unsplash.com/photo-1600783246032-1056431c253c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 220px;
`;

export const Title = styled.h1`
  margin-bottom: 25px;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  text-align: center;
`;

export const SubTitle = styled.p`
  font-size: 24px;
  letter-spacing: 0.06em;
  color: white;
  text-shadow: 2px 2px 4px #000000;
  text-align: center;
`;
