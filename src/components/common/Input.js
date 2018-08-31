import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

const Input = (props) => {
    return(
      <TextInput
        {...props}
      />
    );
}

export default Input;