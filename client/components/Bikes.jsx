import React from 'react'




class Bikes extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    

        this.state = {

            image_path: props.bikeData.image

        }

        //bind
        this.handleClick = this.handleClick.bind(this)
    }

    //onclick
    handleClick() {
        this.setState({
            image_path: this.props.bikeData.secondImage
        })
    }



    render() {
        return (
            <div className="mainWrapper">
                <h1>{this.props.bikeData.name}</h1>
                <div className='mainPhoto bikeMainPhoto'>
                    <img src={this.state.image_path} onClick={this.handleClick} /> 
                </div>
                <div className='mainContent bikeMainContent'>
                    <p>{this.props.bikeData.description}</p>
                </div>

                <div className='footer bikeFooter'> 
                    <img src={this.props.bikeData.gif} />
                </div>
               
                {/* can change to ternery and use boolean in state */}
               
                
            </div>
        )
    }

}





export default Bikes