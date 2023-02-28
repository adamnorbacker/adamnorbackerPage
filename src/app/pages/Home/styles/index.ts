import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 14rem;

  @media (max-width: 600px) {
    font-size: 4rem;
    text-align: center;
  }
`;

export const Section = styled.section`
  height: calc(100vh - 60px);
  width: calc(100vw - 60px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FirstName = styled.span``;
export const LastName = styled.span``;

export const Divider = styled.div`
  width: 100%;
  border: rgba(215, 153, 33, 0.5) solid 0.7rem;
`;
export const Profession = styled.h2`
  font-size: 6rem;
  margin-top: 3rem;
  @media (max-width: 600px) {
    margin-top: 0.7rem;
    font-size: 4rem;
  }
`;

export const TextWrapper = styled.div`
  text-transform: uppercase;
  color: rgba(215, 153, 33, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  text-align: center;
`;
