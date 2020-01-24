import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, CardHeader, CardHContent, Title, Description, CardHFooter, Annotation } from './styles';

export default function Card() {
  return (
    <Container>
      <CardHeader>
        <Icon name="monetization-on" size={28} color="#666" />
        <Icon name="visibility-off" size={28} color="#666" />
      </CardHeader>
      <CardHContent>
        <Title>Saldo disponível</Title>
        <Description>R$ 1.386.965,81</Description>
      </CardHContent>
      <CardHFooter>
        <Annotation>
          Transferência de R$ 1.380.000,00 recebida de Nu Pagamentos S.A. hoje ás 14:17h
        </Annotation>
      </CardHFooter>
    </Container>
  );
}
