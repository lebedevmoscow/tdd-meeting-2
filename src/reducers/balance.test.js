import balanceReducer from './balance'
import * as constants from './../actions/constants'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10

        expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance})).toEqual(balance)
    })

    it('deposits into the balance', () => {
        const deposit = 10
        const initialState = 5

        expect(balanceReducer(initialState, {type: constants.DEPOSIT, deposit})).toEqual(initialState + deposit)
    })

    it('withdraws rom the balance', () => {
        const withdrawl = 10
        const initialState = 20
        expect(balanceReducer(initialState, {type: constants.WITHDRAW, withdrawl})).toEqual(initialState - withdrawl)
    })
})