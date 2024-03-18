import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Note({ id, content, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{content}</Text>
    </TouchableOpacity>
  );
}