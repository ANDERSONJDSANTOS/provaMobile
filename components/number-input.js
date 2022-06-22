import { Text } from 'react-native';

const NumberInput = ({ value, onChangeValue, percentage, setPercentage }) => {
  function plus() {
    if(percentage >= 100) return;
    setPercentage(percentage + 10);
    onChangeValue(value + 0.1);
  }

  function less() {
    if(percentage <= 0) return;
    setPercentage(percentage - 10);
    onChangeValue(value - 0.1);
  }

  return (
    <Text style={container}>
      <Text style={{ fontSize:18,flex:1, paddingLeft:3, fontSize:16 }} onPress={less}>-</Text>
      <Text style={{flex:8, textAlign:'center'}}>{percentage}%</Text>
      <Text style={{flex:1, paddingRight:3, fontSize:16}} onPress={plus}>+</Text>
    </Text>
  );
}

const container = {
  borderBottomColor:'#841584', 
  borderWidth:1, 
  width:100, 
  margin:12,
  display:'flex',
  flex:1
}

export default NumberInput