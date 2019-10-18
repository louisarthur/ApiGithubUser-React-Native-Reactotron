import styled from 'styled-components/native';
// a react-native-gesture-handler tem alguns botões já formatados.
import { RectButton } from 'react-native-gesture-handler';
// O foda do styled components do react native é
// que não pode se encadear components igual o react normal,
// Não tem como definir estilizações globais também.
export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;
// não existe uma tag de form, portanto usarei view
export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eeee;
`;
export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 10px;
  padding: 0 15px;
  border: 1px solid #eeee;
`;
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #f21349;
  border-radius: 10px;
  margin-left: 10px;
  padding: 0 12px;
`;
