import React from 'react'
import {CardText} from 'reactstrap'
import '../index.css'

const Description = (props) => {
    
    
    return (
            <CardText className="background" style={{padding: '5%', }}>{props.desc}</CardText>
    )
}

export default Description
