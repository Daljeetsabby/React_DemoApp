import React from 'react';
import {shallow,render,mount} from 'enzyme';
import RegistrationForm from './RegistrationForm'
import FormikloginForm from './RegistrationForm'

describe('Registration Form', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<RegistrationForm/>);
    });

    test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
