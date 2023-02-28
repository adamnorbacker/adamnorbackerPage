import { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import { Section } from './styles';

export const GLBOptimizer: FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <title>GLBOptimizer</title>
      </Helmet>
      <Section></Section>
    </>
  );
};
