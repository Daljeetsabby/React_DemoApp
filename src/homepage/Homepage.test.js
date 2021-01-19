import React from 'react';
import {shallow} from 'enzyme';
import Homepage from './HomePage'
import ProductList from './ProductList'
import NavbarHeader from '../Component/NavbarHeader'
import footerComponent from '../Component/footerComponent'


describe('Homepage Snapshot', () => {
  let wrapper;
  beforeEach(() => {
      wrapper = shallow(<Homepage/>);
  });

  test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
  });
});


  
describe ('Render Homepage Correctly', ()=> {

   it('it should render Navbar, ProductList and footer component without errors', () => {
        const wrapper = shallow(<Homepage/>);
        expect(wrapper.find(NavbarHeader)).toHaveLength(1);
        expect(wrapper.find(ProductList)).toHaveLength(1);
        expect(wrapper.find(footerComponent)).toHaveLength(1);
  })


})
  