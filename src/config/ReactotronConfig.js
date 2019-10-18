import Reactotron from 'reactotron-react-native';
// esse dev é uma variavel de desenvolvimento é uma váriavel global
//  e quando o app tiver em prod ela reconhece e não é usada
// adicionei essa variavel em eslinterc
if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();
  // toda vez que eu usar o console.tron é reconhecido esse arquivo

  console.tron = tron;
  tron.clear();
}
// importar esse arquivo lá em index.js
