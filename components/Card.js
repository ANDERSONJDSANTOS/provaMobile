import { Title, Paragraph, Card } from 'react-native-paper';
import {Text} from 'react'

const MyCard = ({ text, number, favorite, background }) => {
  return (
    <Card.Content style={{ backgroundColor:background, marginBottom: 20 }}>
      <Title>Nome: {text}</Title>
      <Paragraph>Valor: {number}</Paragraph>
      <Text>Favorito: { favorite }</Text>
    </Card.Content>
);
}

export default MyCard