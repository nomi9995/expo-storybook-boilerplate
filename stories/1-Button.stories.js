import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import {Button} from '../components/index'

export default {
  title: 'Button',
};

export const text = () => (
  <Button title="Hello Button" onPress={action('clicked')} backgroundColor="#eee" />
);

// On-Device Register
storiesOf('Button', module).add('Text', text);
