import React from 'react'
import {shallow, mount, configure} from 'enzyme'
import {Loot} from './Loot'

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Loot', () => {
    let props = {balance: 10, bitcoin: {}}
    let loot = shallow(<Loot {...props}/>)

    it('renders properly', () => {
        expect(loot).toMatchSnapshot()
    })

    describe('when mounted', () => {
        const mockFetchBitcoin = jest.fn()
        beforeEach(() => {
            loot = mount(<Loot {...props} fetchBitcoin={mockFetchBitcoin}/>)
        })

        it('dispatches the `fetchBitcoin()` method it receives from props', () => {
            // console.log(loot.debug())
            expect(mockFetchBitcoin).toHaveBeenCalledTimes(1)
        })
    })

    describe('when there are valid bitcoin props', () => {
        beforeEach(() => {
            props = {balance: 10, bitcoin: {bpi: {USD: {rate: '1,000'}}}}
            loot = shallow(<Loot {...props}/>)
        })

        it('displays the correct bitcoin value', () => {
            expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01')
        })
    })
})