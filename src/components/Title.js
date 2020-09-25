import React from 'react'
import {CardTitle} from 'reactstrap'
import '../index.css'

const Title = (props) => {
    return (
            <CardTitle className='title'>{props.imgTitle} - - {props.date}</CardTitle>
    )
}

export default Title
