import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>How curious are you?</h1>
            <div>
              <button><Link to={'/Bikes'}>Claire</Link></button>
              <button><Link to={'/Santino'}>Lui</Link></button>
              <button><Link to={'/ethan'}>Ethan</Link></button>
            </div>

        </div>

    )
}

export default Home