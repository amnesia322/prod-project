import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from 'widgets/PageError';

const meta = {
    title: 'widgets/PageError',
    component: PageError,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
