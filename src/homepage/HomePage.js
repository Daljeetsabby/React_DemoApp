import React from 'react';
import ProductList from './ProductList'
import NavbarHeader from '../Component/NavbarHeader'
import FooterComponent from '../Component/footerComponent'

export default function HomePage() {

  return (
    <>
      <NavbarHeader/>
      <ProductList/>
      <FooterComponent/>
    </>
  )
}

