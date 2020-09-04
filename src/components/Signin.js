import React, { Component } from 'react'
import ReactDOM from "react-dom";

import User from '../components/User';

import { Col, Row, Button, Form, FormGroup, Label, Input, Card 
} from 'reactstrap';



export default class Signin extends Component {
    render() {
        return (
            <div>
             < Card>
                <Col>
                 
                <h1>Signin</h1>
                < User FormGroup ></User>
                
                 </Col>
                 </Card>
            </div>
          )
      }
   }