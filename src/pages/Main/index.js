import React, { Component } from 'react';
import { View } from 'react-native';
// utilizei o snippet RNFC - REACT NATIVE FUNCIONAL COMPONENT
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, SubmitButton } from './styles';
// para adicionar o react-native-vector-icons teremos que fazer o link
// digitando o react-native link react-native-vector-icons
// e depois dá um run-ios again.reac

export default class Main extends Component {
  state = {
    newUser: '',
    users: [],
  };

  handlersSubmit = () => {
    console.tron.log(this.state.newUser);
  };

  render() {
    const { newUser, users } = this.state;
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            value={newUser}
            onChangeText={text => this.setState({ newUser: text })}
          />
          <SubmitButton onPress={this.handlersSubmit}>
            <Icon name="add" size={20} color="#eee" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};
