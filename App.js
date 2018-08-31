import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { AppLoading, Font } from 'expo';
import RootNavigator from './src/navigation/RootNavigator';

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };
  
  _loadResourcesAsync = async () =>{
    return Promise.all([
      Font.loadAsync({
        'polly-bold': require('./assets/fonts/PollyRounded-Regular.otf'),
      }),
    ]);
  }
  
  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };
  
  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
  
  render() {
    if(this.state.isLoadingComplete)
      return(
        <RootNavigator /> 
      );
    else
      return(
        <AppLoading 
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
  } 
}