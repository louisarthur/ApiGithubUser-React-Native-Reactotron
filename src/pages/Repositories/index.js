import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Browser } from './styles';

// import { Container } from './styles';

export default function Repositories({ navigation }) {
  const repository = navigation.getParam('repository');
  console.tron.log(navigation.getParam('repository'));
  return <Browser source={{ uri: repository.html_url }} />;
}

Repositories.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

Repositories.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('repository').name,
});
