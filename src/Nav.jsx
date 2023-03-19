import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
            <Link className='link' to='/'>Todo</Link>
            <Link className='link' to='/film'>Film</Link>
        </div>
    )
}

export default Nav