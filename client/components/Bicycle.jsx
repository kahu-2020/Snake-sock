import React from 'react'

const Bicycle = (props) => {
  console.log(props)
  return (
    <div>
      <img src={props.bikeData.bikeData.gif} />
    </div>
  )
}

export default Bicycle