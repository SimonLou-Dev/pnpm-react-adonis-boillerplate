import React from 'react';
import type { Meta, StoryObj  } from '@storybook/react';
import {Button} from '@simonlou/ui';

const meta: Meta<typeof  Button> = {
    component: Button
}

export default meta;
type Story = StoryObj<typeof Button>;
export const Default: Story = {
    args: {
        disabled: false,
        type: 'default',
        children: 'hello word'
    }
}

export const Big: Story = {
    args: {
        disabled: false,
        type: 'big',
        children: 'hello word'
    }
}

