import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    test('incremented', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(
            counterReducer(state, counterActions.incremented()),
        ).toEqual({ value: 11 });
    });

    test('decremented', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(
            counterReducer(state, counterActions.decremented()),
        ).toEqual({ value: 9 });
    });
});
