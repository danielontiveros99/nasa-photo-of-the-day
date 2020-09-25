import React, { Component } from 'react'
import {CardImg} from 'reactstrap'
import '../index.css'
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

// const Img = (props) => {
    class HoverPage extends React.Component{
        render() {
    return (
            // <CardImg className='img' src={props.photo} top width="50%" alt="Photo of the day."/>
            <MDBView>
                <MDBView hover zoom>
                    <img
                        top width="50%"
                        src={this.props.photo}
                        className="img-fluid"
                        alt="Photo of the day."
                    />
                    <MDBMask className='flex-center' overlay="white-strong">
                        <p className="white-text">{this.props.imgTitle}</p>
                    </MDBMask>
                    </MDBView>
            </MDBView>
    )
}
    }

export default HoverPage
