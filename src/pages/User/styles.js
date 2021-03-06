import styled from 'styled-components/native';
import { BaseButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #ffff;
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-color: #eeeeee;
`;

export const Name = styled.Text`
  font-size: 15px;
  padding: 10px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;

export const Bio = styled.Text`
  text-align: center;
  color: #33333333;
  font-size: 14px;
  line-height: 18px;
  color: #999;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eeeeee;
`;
export const Repos = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Repository = styled(RectButton)`
  background: #f5f5f5;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
  border-left-width: 6px !important;
  border-color: #f21333;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const OwnerAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eeeeee;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  margin-top: 3px;
  font-size: 12px;
  color: #777;
`;
export const Loading = styled.ActivityIndicator.attrs({
  color: '#f21333',
  size: 100,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
