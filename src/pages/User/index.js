import React, { Component } from 'react';
// utilizei o snippet RNFC - REACT NATIVE FUNCIONAL COMPONENT
import { ActivityIndicator } from 'react-native';
// import { Container } from './styles';
import PropTypes from 'prop-types';
import Api from '../../services/github';
import {
  Container,
  Name,
  Header,
  Bio,
  Avatar,
  Repos,
  Repository,
  Info,
  OwnerAvatar,
  Title,
  Author,
} from './styles';
// import { isTemplateElement } from '@babel/types';

export default class Users extends Component {
  state = {
    stars: [],
    loading: false,
  };
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };
  // pegando apenas navigation da props
  // console.tron.log(navigation.getParam('login'));
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name
      ? navigation.getParam('user').name
      : navigation.getParam('user').login,
  });
  async componentDidMount() {
    this.setState({ loading: true });
    const { navigation } = this.props;
    const user = navigation.getParam('user').login;

    const response = await Api.get(`/users/${user}/starred`);
    this.setState({ stars: response.data, loading: false });
  }
  render() {
    const { stars, loading } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <Repos
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <Repository>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              {loading ? (
                <ActivityIndicator color="#eeee" />
              ) : (
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              )}
            </Repository>
          )}
        />
      </Container>
    );
  }
}
