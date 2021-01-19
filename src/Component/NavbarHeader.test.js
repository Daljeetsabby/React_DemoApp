import React from 'react';
import { shallow } from 'enzyme';
import NavbarHeader from './NavbarHeader'


describe('Navbar', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavbarHeader/>);
    });

    test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe('Navbar Render correctly ', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavbarHeader />);
    })

    it('should have Single button for Logo', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    })
    it('should have Single unorder list', () => {
        expect(wrapper.find('ul')).toHaveLength(1);
    })
    it('should have three list element', () => {
        expect(wrapper.find('li')).toHaveLength(3);
    })
    it('should have 6 NavLink for routing', () => {
        expect(wrapper.find('NavLink')).toHaveLength(4);
    })

    it('Should have nav items of home and sign out', () => {
        expect(wrapper.find('nav').length).toEqual(1);
    });

    it('Test click event', () => {
       
        const button = shallow((<NavbarHeader />));
        button.find('button').simulate('click');
       
      });

})

