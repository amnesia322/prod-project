import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from 'widgets/Navbar';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
