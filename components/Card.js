import { Title, Paragraph, Card } from 'react-native-paper';
import ProgressBar from './ProgressoBar';

import {Text} from 'react';

const MyCard = ({ text, number, favorite, background }) => {
  return (
    <Card.Content style={{ backgroundColor:background, marginBottom: 20 }}>
      <Title>Nome: {text}</Title>
      <Paragraph>Progresso</Paragraph>
      <ProgressBar progress={number}/>
      <Text>Favorito: { favorite }</Text>
    </Card.Content>
);
}

export default MyCard