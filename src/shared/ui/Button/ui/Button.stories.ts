import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/ui/Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.OUTLINE,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'Button',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
