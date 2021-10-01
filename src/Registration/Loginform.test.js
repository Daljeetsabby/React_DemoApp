import React from 'react';
import {shallow} from 'enzyme';
import Formiklogin from './loginform'

describe('Login Form', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Formiklogin/>);
    });

    test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
