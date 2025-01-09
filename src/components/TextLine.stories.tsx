import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextLine from './TextLine';

export default {
  title: 'Components/TextLine',
  component: TextLine,
  argTypes: {
    children: { control: 'text' },
    keywords: { control: { type: 'array' } },
    highlightColor: { control: 'color' },
    textColor: { control: 'color' },
    fontWeight: {
      control: {
        type: 'select',
        options: ['normal', 'bold', 'bolder', 'lighter'],
      },
    },
    animationEffect: {
      control: {
        type: 'select',
        options: ['fade', 'scale', 'color'],
      },
    },
    onKeywordClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof TextLine>;

const Template: ComponentStory<typeof TextLine> = (args) => <TextLine {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'This is an example text. Highlight certain words like example and text.',
  keywords: ['example', 'text'],
  highlightColor: 'yellow',
  textColor: 'red',
  fontWeight: 'bold',
  animationEffect: 'fade',
};
