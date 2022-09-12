import {View, Text} from 'react-native';
import React from 'react';
import {FancyButton, Counter} from '@sample-monorepo/components';

const App = () => {
  return (
    <View>
      <Text>Hello world</Text>
      <FancyButton text="my button" />
      <Counter step={5} />
    </View>
  );
};

export default App;
