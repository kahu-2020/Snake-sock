import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Mystery Box?</h1>
            <div className='homeButtons'>
              <button><Link to={'/Bikes'}>?</Link></button>
              <button><Link to={'/Santino'}>??</Link></button>
              <button><Link to={'/Trixie'}>???</Link></button>
            </div>

        </div>

    )
}

export default Home