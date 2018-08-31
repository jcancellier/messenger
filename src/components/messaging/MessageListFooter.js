import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { Input, Button } from '../common';
import { Colors } from '../../constants'

class MessageListFooter extends Component {
  constructor(props){
    super(props);
  }

  
  render() {
    return(
      <View style={styles.container}>
         <Input
            style={styles.input}
            onChangeText={this.props._handleUserInput}
            value={this.props.messageInputText}
            placeholder="Your Message"
            placeholderTextColor='rgba(255,255,255,0.5)'
            multiline
         />
         <Button 
            style={[styles.sendButton, this.props.sendButtonDisabled ? styles.disabledButton : null]} 
            textStyle={styles.sendButtonText} 
            onPress={this.props._handleMessageSubmitButton}
            disabled={this.props.sendButtonDisabled}
          >
              Send
         </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor:'rgba(255,255,255,0.06)',
  },
  input: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 25,
    padding: 10,
    borderColor: 'gray', 
    // borderWidth: 0.3, 
    borderRadius: 20,
    flex: 4,
    // backgroundColor:'',
    fontSize: 16,
    fontFamily: 'polly-bold',
    margin: 5,
    marginRight: 3
  },
  sendButton: {
    // backgroundColor: Colors.flat.darkblue,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    flex: 1,
    margin: 5,
    marginLeft: 2
  },
  sendButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.flat.white,
    padding: 10,
  },
  disabledButton: {
    // backgroundColor: 'rgba(15, 15, 15, 0.5)',
  }
});
export default MessageListFooter;