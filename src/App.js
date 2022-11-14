import React from 'react'
import Photo from './components/Photo'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App(){
    return (
        <div className='app'>
            <Photo />
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}