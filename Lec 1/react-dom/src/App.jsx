import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import ProductInfo from './components/ProductInfo'
import UserList from './components/UserList'
import ProductList from './components/ProductList'


const App = () => {
  return (
    <div className='flex justify-around'>
    <UserList/>
    <ProductList/>
    </div>
  )
}

export default App 