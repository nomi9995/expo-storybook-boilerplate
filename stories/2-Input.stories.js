import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import {Input} from '../components/index'

export default {
  title: 'Input',
};

export const text = () => (
  <Input title="Hello Button" onChangeText={action('onChangeText')} backgroundColor="#eee" />
);

// On-Device Register
storiesOf('Input', module).add('Input', text);
