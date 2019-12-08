import React, { Component } from 'react';
// utilizei o snippet RNFC - REACT NATIVE FUNCIONAL COMPONENT
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
  Loading,
} from './styles';
// import { isTemplateElement } from '@babel/types';

export default class Users extends Component {
  state = {
    stars: [],
    page: 1,
    refreshing: false,
    loading: true,
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
    this.load();
  }

  load = async (page = 1) => {
    // acima podemos perceber um parametro padrão.
    // this.setState({ loading: true });
    const { stars } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user').login;
    const response = await Api.get(`/users/${user}/repos`, {
      params: { page },
    });

    this.setState({
      stars: page > 1 ? [...stars, ...response.data] : response.data,
      loading: false,
      page,
      refreshing: false,
    });
  };

  loadMore = () => {
    const { page } = this.state;
    const proxPage = page + 1;
    this.load(proxPage);
  };

  refreshPartial = () => {
    this.setState({ refreshing: true, stars: [] }, this.load);
  };

  handleNavigate = repository => {
    const { navigation } = this.props;

    navigation.navigate('Repositories', { repository });
    console.tron.log(navigation);
  };

  render() {
    const { stars, loading, refreshing } = this.state;
    const { navigation } = this.props;
    const user = navigation.getParam('user');
    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        {loading ? (
          <Loading />
        ) : (
          <Repos
            data={stars}
            keyExtractor={star => String(star.id)}
            onRefresh={this.refreshPartial}
            refreshing={refreshing}
            onEndReachedThreshold={0.2}
            onEndReached={this.loadMore}
            renderItem={({ item }) => (
              <Repository onPress={() => this.handleNavigate(item)}>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Repository>
            )}
          />
        )}
      </Container>
    );
  }
}
