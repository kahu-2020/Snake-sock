import React from 'react'
import {Link} from 'react-router-dom'

class Santino extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           image_path : this.props.santino.footerImage1  
        }

        this.handleClick = this.handleClick.bind(this)
     
    }

    handleClick() {
        this.setState({
                image_path : this.props.santino.footerImage2
        })
    }


    render () {
        return (
            <div>
                <div className="mainPhoto santinoMainPhoto"> 
                    <img src={this.props.santino.mainImages} height='600'  /> 
                </div>
                <section className="mainWrapper MainWrapper">
                    
                    <img  src={this.props.santino.headerImage} height='250' width='250'/>
                    
                    <h2> {this.props.santino.name} </h2>

                    <article className="mainContent santinoMainContent">
                        <p> Arguably the greatest WWE superstar of all time, Santino Marella holds many records and achievements within the squared octagon.Ever since debuting on the 16th of April in 2007, hes been without a doubt the biggest star in WWE history since Eugene back in 2004 (despite Eugene failing 2 drug tests and being fired from the WWE).He is a two-time WWE Intercontinental Champion, one-time WWE United States Champion, and one-time WWE Tag Team Champion. </p>
                    </article>

                    <img src={this.state.image_path} onClick={this.handleCLick}/>
                </section>
            </div>
        )
    }
}

export default Santino