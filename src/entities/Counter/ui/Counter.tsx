import React from 'react';
import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.incremented());
    };

    const decrement = () => {
        dispatch(counterActions.decremented());
    };

    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1>
                value =
                {counterValue}
            </h1>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={increment}>
                inc
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={decrement}>
                dec
            </Button>
        </div>
    );
};
