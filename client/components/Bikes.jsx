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

    leftClick = evt => {
        evt.preventDefault()
        this.setState({
            image_path: this.props.bikeData.image
        })
    }



    render() {
        return (
        
                <div className='mainWrapper'>
                    <div className='mainPhoto bikeMainPhoto'>
                        <img className='mainPic' src={this.state.image_path} onClick={this.handleClick} onContextMenu={this.leftClick} />
                    </div>
                    <section className='contentWrapper bikeWrapper'>
                    <h1>{this.props.bikeData.name}</h1>
                    <div className='mainContent bikeMainContent'>
                        <p>{this.props.bikeData.description}</p>
                        <p>{this.props.bikeData.info}</p>
                    </div>
                </section>
                <div>
                    <img className='footImage' src={this.props.bikeData.footImage} />
                </div>
            
            </div>
        )
    }

}





export default Bikes