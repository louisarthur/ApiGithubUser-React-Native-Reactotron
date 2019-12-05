import React, { Component } from 'react';
//  react native não existe nenhum link igual o react para web
// toda a navegação precisa ser feita através de javascript utilizando
// uma propriedade padrão de cada componenente chamada navigate
import { Keyboard, ActivityIndicator } from 'react-native';
// utilizei o snippet RNFC - REACT NATIVE FUNCIONAL COMPONENT
// o acitivity indicator é uma tag padrão do react native para fazer a indicação do uso
// de algum componente, ele usa um icon de loading padrão dependendo do sistema.
import GitApi from '../../services/github';
import AsyncStorage from '@react-native-community/async-storage';
// teremos que usar o await, pois o async storage é asyncrono, demora um pouco para fazer
// a estocagem do dado. os metodos iguais o do react irão ser asyncronos
// o component did mount e component did update.
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
// proptypes é para fazer a validação das propriedades
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Name,
  Avatar,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles';
// para adicionar o react-native-vector-icons teremos que fazer o link
// digitando o react-native link react-native-vector-icons
// e depois dá um run-ios again.react
// ActivityIndicator é pedrão do react-native que indifca nos celulares
// que está em atividade alguma função
export default class Main extends Component {
  // posso usar o navigationOtion aqui, pelo fato de usar o proptypes
  static navigationOptions = {
    title: 'Usuários do GitHub',
  };

  static PropTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    newUser: '',
    users: [],
    loading: false,
  };

  async componentDidMount() {
    // console.tron.log(this.props);
    // verificar as propriedades de cada component
    const users = await AsyncStorage.getItem('users');

    if (users) {
      this.setState({ users: JSON.parse(users) });
    }
  }
  async componentDidUpdate(_, prevState) {
    // prevstate é o estado antes de receber a alteração
    const { users } = this.state;
    if (prevState.users !== users) {
      await AsyncStorage.setItem('users', JSON.stringify(users));
      // posso tirar o async e await, pois não será executado nada após a operação acima,
      // mas irei deixar
    }
  }

  handlersSubmit = async () => {
    this.setState({ loading: true });
    const { newUser, users } = this.state;
    const res = await GitApi.get(`/users/${newUser}`);

    const data = {
      name: res.data.name,
      login: res.data.login,
      bio: res.data.bio,
      avatar: res.data.avatar_url,
    };
    this.setState({ users: [...users, data], newUser: '', loading: false });
    // o teclado desce!!!!!
    Keyboard.dismiss();
  };

  handleNavigate = user => {
    const { navigation } = this.props;
    // User foi declarado no routes, no stacknavigation
    navigation.navigate('User', { user });
  };

  render() {
    const { newUser, users, loading } = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
            returnKeyType="send"
            // o botão enter do teclado do mobile, vai ficar send
            onSubmitEditing={this.handlersSubmit}
          />
          {/* no react nativ não existe form, então o submit tem que ser no botão */}
          <SubmitButton loading={loading} onPress={this.handlersSubmit}>
            {loading ? (
              <ActivityIndicator color="#eeeeee" />
            ) : (
              <Icon name="add" size={20} color="#eee" />
            )}
          </SubmitButton>
        </Form>
        {/* Obrigatóriamente o data tera que ser um array, com os dados da lista*/}
        {/* Keyextrator é similar ao key do map para listagem */}
        <List
          data={users}
          keyExtrator={user => user.login}
          renderItem={({ item }) => (
            <User>
              {/* avatar é tipo img, uri é uma propriedade */}
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>
              <ProfileButton onPress={() => this.handleNavigate(item)}>
                <ProfileButtonText>Ver Perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />
      </Container>
    );
  }
}
