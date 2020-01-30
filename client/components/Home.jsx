import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>How curious are you?</h1>
            <div>
              <button><Link to={'/Bikes'}>claire</Link></button>
              <button><Link to={'/lui'}>lui</Link></button>
              <button><Link to={'/ethan'}>ethan</Link></button>
            </div>

        </div>

    )
}

export default Home