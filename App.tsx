import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {RecoilRoot} from 'recoil';
import AppNavigation from './src/navigation';

const App = () => {
  return (
    <RecoilRoot>
      <AppConfiguration />
    </RecoilRoot>
  );
};

const AppConfiguration = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <AppNavigation />
    </>
  );
};

export default App;
