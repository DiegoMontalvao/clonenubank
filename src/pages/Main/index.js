import React from 'react';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Card from '~/components/Card';

import { Container, Content } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card />
      </Content>
      <Tabs />
    </Container>
  );
}
