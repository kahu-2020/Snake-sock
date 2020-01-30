import React from 'react'
//import Image from '../../data/images/Santino1.png'
import { render } from 'enzyme'
//import { Link } from 'react-router-dom'


class Santino extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
              height: '450px',
              width:'300px',
              backgroundColor: 'black' ,
            },
            
        }
        this.handleClick = this.handleClick.bind(this)
    }


    onclick
    handleClick() {
        this.setState({
            style: {
                height: '450px',
                width:'300px',
                backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
            }
        })
    }


    clickHandler = evt => {
        this.setState({
            style: {
                height: '450px',
                width: '300px',
                backgroundColor: `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`,
            }
        })
    }




    render() {
        return (
            <div>
                <header>
            <h1>I am Santino Marella</h1>
                </header>
            <p>Fear my Cobra STRIKE</p>
            <div style={this.state.style} onClick={this.handleClick}></div>
            <p>Arguably the greatest WWE superstar of all time, Santino Marella holds many records 
                and achievements within the squared octagon.<br></br>Ever since debuting on the 16th of April in 2007, he's been 
                without a doubt the biggest star in WWE history since Eugene back in 2004 <br></br>(despite Eugene failing 2 drug tests and being fired from the WWE).
                He is a two-time WWE Intercontinental Champion, one-time<br></br> WWE United States Champion, and one-time WWE Tag Team Champion.
            </p>
            </div>
        )
    }

}





export default Santino