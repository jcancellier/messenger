import React, { Component } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, LayoutAnimation } from 'react-native';
import { Constants, LinearGradient } from 'expo';
import uuidv4 from 'uuid/v4';
// You can import from local files
import MessageList from '../components/messaging/MessageList';
import MessageListFooter from '../components/messaging/MessageListFooter';
import messages from '../dummyData/messages';

var currentUserId = 0;
var receiverId = 1;

var CustomLayoutAnimation = {
    duration: 300,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.linear
    },
};

export default class ChatScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props){
    super(props);
    this.state={
      messages: [...messages],
      messageInputText: '',
      sendButtonDisabled: true,
      reRenderList: true
    }
  }
  
  _handleMessageSubmitButton() {
      let newState = [this._createNewMessage(), ...this.state.messages];
      LayoutAnimation.configureNext(CustomLayoutAnimation);
      this.setState({messages: newState}, () => {
        console.log(this.state.messages);
            this.setState({messageInputText: ''}, () => {
              this.setState({sendButtonDisabled: true});
            });
      });
  }
  
  _handleUserInput(messageInputText) {
    this.setState({messageInputText}, () => {
      if(this.state.messageInputText.length > 0)
        this.setState({sendButtonDisabled: false})
      else if(this.state.messageInputText.length == 0)
        this.setState({sendButtonDisabled: true})
    });
  }
  
  _createNewMessage() {
    return {
      text: this.state.messageInputText,
      id: uuidv4(),
      senderId: currentUserId,
      receiverId: receiverId,
    }  
  }
  
  render() {
    return (
      <LinearGradient colors={['#22ACE6', '#4B90E8','#B970FF','#0098D4']} 
        style={styles.container}
        // start={[0.1, 0.1]}
        // end={[0.9,0.9]}
        locations={[0.05,0.2,0.6,1]}
      >
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <MessageList 
          messages={this.state.messages} 
        />
        <MessageListFooter 
          messageInputText={this.state.messageInputText}
          sendButtonDisabled={this.state.sendButtonDisabled}
          _handleUserInput={this._handleUserInput.bind(this)}
          _handleMessageSubmitButton={this._handleMessageSubmitButton.bind(this)}
        />
      </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // paddingTop: Constants.statusBarHeight
  },
});
