import React from 'react'
import {Link} from 'react-router-dom'

class Trixie extends React.Component {
    constructor(props) {
        super(props)
        console.log('hi')
    }
    
    render () {
        console.log('hi')
        return (
            <div>
                <div className="mainPhoto trixieMainPhoto"> 
                    <img src={this.props.trixie.mainImages[0]} height='600'  /> 
                </div>
                <section className="mainWrapper trixieMainWrapper">
                    
                    <img  src={this.props.trixie.headerImage} height='250' width='250'/>
                    
                    <h2> {this.props.trixie.name} </h2>

                    <article className="mainContent trixieMainContent">
                        <p> Trixie Mattel is the stage name of Brian Michael Firkus, an American singer, actor, drag queen and recognized “Skinny Legend.” Trixie is the winner of “RuPaul’s Drag Race All Stars” season 3 (originally competing on season 7). He is also a Billboard Heatseekers #1 charting recording artist (One Stone, 2018), a wildly successful theater touring act, and one half of a comic duo on Viceland (“The Trixie and Katya Show”) and on YouTube (“UNHhhh”). In 2019, Trixie will be working the festival circuit as the subject of a bio documentary, “Trixie Mattel: Moving Parts.” Trixie Mattel is managed by Producer Entertainment Group and online at trixiemattel.com or @trixiemattel. </p>
                    </article>
                </section>

                <div className="footer">
                    
                </div>
            </div>
        )
    }
}

export default Trixie