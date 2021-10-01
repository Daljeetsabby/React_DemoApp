import React from 'react';
import { shallow } from 'enzyme';
import ViewProduct from './ViewProduct'
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
const store = configureStore();


describe('View Product', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Provider store={store}><ViewProduct/></Provider>);
    });

    test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

