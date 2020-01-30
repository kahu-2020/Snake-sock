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
            <div>
                <h1>{this.props.bikeData.name}</h1>
                <img src={this.state.image_path} onClick={this.handleClick} /> 
                <img src={this.props.bikeData.gif} />
                {/* can change to ternery and use boolean in state */}
                <p>{this.props.bikeData.description}</p>
                
            </div>
        )
    }

}





export default Bikes