import React from 'react'
import NavBar from './NavBar'
const Home = () => {
    const style = {
        backgroundColor: 'red', display: 'block',
    }
    return (
        <>
            <NavBar />
            <div style={style}>This is Home
            </div></>

    )
}
export default Home