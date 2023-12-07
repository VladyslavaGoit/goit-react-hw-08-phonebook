import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  background-image: url('https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-size: cover;
  background-position: right top -50px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-top: 100px;
  padding-bottom: 400px;
`;
export const TextWrapper = styled.div`
  position: relative;
  background-color: ${p => p.theme.colors.secondBckg};
  width: 400px;
  padding: 15px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: -30px;
    width: 0;
    height: 0;
    border-bottom: 15px solid ${p => p.theme.colors.secondBckg};
    border-left: 30.5px solid transparent;
  }
`;
export const Title = styled.h1`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 28px;
  margin-bottom: 25px;
  color: ${p => p.theme.colors.accentText};
  text-shadow: 2px 2px 4px #000000;
`;

export const SubTitle = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.06em;
  color: ${p => p.theme.colors.subTitleText};
  text-shadow: 2px 2px 4px ${p => p.theme.colors.secondBckg};
`;
