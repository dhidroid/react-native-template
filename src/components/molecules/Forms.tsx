import React from 'react';
import { View, TextInput, Button } from 'react-native';

const Form = ({ fields, onSubmit }) => (
  <View>
    {fields.map((field, index) => (
      <TextInput
        key={index}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
        placeholder={field.placeholder}
        value={field.value}
        onChangeText={field.onChangeText}
      />
    ))}
    <Button title="Submit" onPress={onSubmit} />
  </View>
);

export default Form;
