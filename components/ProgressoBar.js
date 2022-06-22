import * as React from 'react';
import { ProgressBar } from 'react-native-paper';

const MyComponent = ({ progress }) => (
  <ProgressBar progress={progress} color='#841584' />
);

export default MyComponent;