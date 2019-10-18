import React from 'react';
import { StatusBar } from 'react-native';
// importanto o reactotron, reactotron é para debug e etc, para fazer todo o debug
// da aplicação e tem algumas iteraçÕes com o react native e reactjs tbm
import './config/ReactotronConfig';
import Routes from './Routes';

export default function App() {
  return (
    <>
      {/* posso usar hidden ou translucid também */}
      <StatusBar barStyle="light-content" backgroundColor="#f21349" />
      <Routes />
    </>
  );
}
