import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@baianotech-ui/react'

export default {
  title: 'Typegraphy/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, facere! Minus sint id aperiam alias explicabo tempora doloribus blanditiis, similique quis molestiae dolores deleniti eos, veniam quos! Amet, quo obcaecati?',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'String text',
    as: 'strong',
  },
}
