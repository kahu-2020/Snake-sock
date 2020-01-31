import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <h1>Mystery Box?</h1>
            <div className='homeButtons'>
              <button className='btn'><Link to={'/Bikes'}>?</Link></button>
              <button className='btn'><Link to={'/Santino'}>??</Link></button>
              <button className='btn'><Link to={'/Trixie'}>???</Link></button>
            </div>

        </div>

    )
}

export default Home