import React, { Component } from 'react'
import {Jumbotron, Button } from 'reactstrap';
import Slides from './Slides';
export default class Home extends Component {
    render() {
        return (
            <div>
            <Slides/>
        <Jumbotron>
        <h1 className="display-3">Hello everyone</h1>
        <p className="lead">We hope that everyone will find the products they want to buy.</p>
        <p className="lead">And we hope everyone is happy. In selecting products</p>
        <hr className="my-2" />
        <p>Thank You everyone</p>
        <p className="lead">
          <Button color="primary"></Button>
        </p>
      </Jumbotron>
        
            </div>
        )
    }
}