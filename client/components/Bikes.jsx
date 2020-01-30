import React from 'react'

class Bikes extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            style: {
                backgroundColor: 'yellow',
            },
        }

        //bind
        this.handleClick = this.handleClick.bind(this)
    }

    //onclick
    handleClick() {
        this.setState({
            style: {
                backgroundColor: 'blue'
            }
        })
    }


    clickHandler = evt => {
        this.setState({
            style: {
                height: '250px',
                width: '250px',
                backgroundColor: '#000',
            }
        })
    }

    render() {
        return (
            <div>
            <h1>Liv Intrigue</h1>
            <p>Bike bike vroom vroom no i'm not a car</p>
            </div>
        )
    }

}





export default Bikes