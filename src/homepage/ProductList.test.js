import React from 'react';
import { shallow, mount,render } from 'enzyme';
import { Provider } from 'react-redux'
import ProductList from './ProductList'
import configureStore from '../store/configureStore';
const store = configureStore();


describe('ProductList Snapshot', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Provider store={store}><ProductList /> </Provider> );
    });

    test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe('ProductLList testing ', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = render(<Provider store={store}><ProductList /> </Provider> );
    })

    it('should have Single toggle button for customization', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    })
    it('should have input fields', () => {
        expect(wrapper.find('input')).toHaveLength(7);
    })
   

})

