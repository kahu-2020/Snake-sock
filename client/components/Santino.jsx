import React from 'react'
import {Link} from 'react-router-dom'

class Santino extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <div className="mainPhoto santinoMainPhoto"> 
                    <img src={this.props.santino.mainImages} height='400'  /> 
                </div>
                <section className="mainWrapper MainWrapper">
                    
                    <img  src={this.props.santino.headerImage} height='250' width='250'/>
                    
                    <h2> {this.props.santino.name} </h2>

                    <article className="mainContent santinoMainContent">
                        <p> Arguably the greatest WWE superstar of all time, Santino Marella holds many records and achievements within the squared octagon.Ever since debuting on the 16th of April in 2007, hes been without a doubt the biggest star in WWE history since Eugene back in 2004 (despite Eugene failing 2 drug tests and being fired from the WWE).He is a two-time WWE Intercontinental Champion, one-time WWE United States Champion, and one-time WWE Tag Team Champion. </p>
                    </article>

                    <img src={this.props.santino.footerImage[0]} height='150' width='300'/>
                </section>
            </div>
        )
    }
}

export default Santino