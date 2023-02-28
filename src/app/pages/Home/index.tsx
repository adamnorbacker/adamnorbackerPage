import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Divider,
  FirstName,
  LastName,
  Profession,
  Section,
  TextWrapper,
  Title,
} from './styles';

export const Home: FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Section>
        <TextWrapper>
          <Title>
            <FirstName>Adam</FirstName> <LastName>Norbäcker</LastName>
          </Title>
          <Divider />
          <Profession>Developer</Profession>
        </TextWrapper>
      </Section>
    </>
  );
};
