import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants'

class Message extends Component {
  _determineContainerStyles() {
    return this.props.isSender ? styles.senderContainer
                      : styles.receiverContainer
  }
  
  _determineTextStyles() {
    return this.props.isSender ? styles.senderMessageText : styles.receiverMessageText;
  }
  
  render(){
    return(
        <View style={[this._determineContainerStyles(), styles.container]}>
          <Text style={[styles.messageText, this._determineTextStyles()]}>{this.props.text}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.2
  },
  senderContainer: {
    alignSelf: 'flex-end', 
    // backgroundColor: Colors.flat.darkblue
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  receiverContainer: {
    alignSelf: 'flex-start', 
    // backgroundColor: Colors.flat.gray
    backgroundColor: 'rgba(255,255,255,0.8)'
  },
  messageText: {
    padding: 15,
    fontFamily: 'polly-bold',
    fontSize: 15,
  },
  senderMessageText: {
    // color: Colors.flat.white
    color: 'rgba(0,0,0,0.6)'
  }, 
  receiverMessageText: {
    color: Colors.flat.black,
    // color: Colors.flat.white    
  }
})

export default Message;