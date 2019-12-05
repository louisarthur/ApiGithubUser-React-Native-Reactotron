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
  opacity: ${props => (props.loading ? 0.6 : 1)};
`;
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;
export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 34px;
  /*  o react native não trabalha com porcetagem, então o border raidus
  irá ser a metade da imagem*/
  /* esse background vai dar a impressãO QUE A IMAGEM tá carregando */
  background-color: #eeee;
`;
export const Name = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;
export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  color: #999;
  line-height: 22px;
  margin-top: 5px;
  text-align: center;
`;
export const ProfileButton = styled(RectButton)`
  background: #f21349;
  margin-top: 15px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 40px;
`;
export const ProfileButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  font-size: 14px;
`;
