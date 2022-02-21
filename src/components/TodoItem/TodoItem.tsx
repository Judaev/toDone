import React from 'react';
import {Text, View, ViewStyle} from 'react-native';

interface TodoItemProps {
  title: string;
  style?: ViewStyle;
}

function TodoItem({title, style}: TodoItemProps) {
  return (
    <View
      style={{
        ...style,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
      }}>
      <View
        style={{
          height: 30,
          width: 30,
          borderWidth: 2,
          borderColor: 'red',
          borderRadius: 100,
          backgroundColor: 'white',
          marginRight: 20,
        }}
      />
      <Text>{title}</Text>
    </View>
  );
}

export default TodoItem;
