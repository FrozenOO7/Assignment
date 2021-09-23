import React, { useState } from 'react'
import Details from './Details'
import Header from './Header'
import Search from './Search'

function Main() {
    const [notFound, setNotFound] = useState('');

    return (
        <div className="main-component">
            <Header />
            <Search notFound={notFound} setNotFound={setNotFound} />
            <Details notFound={notFound} />
        </div>
    )
}

export default Main
