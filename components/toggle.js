import { Switch } from 'react-native-paper';
import { useState } from 'react';

const Toggle = ({isSwitchOn, setIsSwitchOn}) => {
  

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  
  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} style={{margin:12}} />;
};

export default Toggle;