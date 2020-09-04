import React, { Component } from 'react'

import User from '../components/User';


import { Row, Col,
     Card, Button, CardTitle, CardText, CardBody, CardImg } from 'reactstrap';

  
    
   

const users = [
      
      {
        
          _id: '5014',
          name:'วรนุช พะสะหวัด',
          email: 'volanouth.phasavath@gmail.com',
          address: '210/1-2 ถนนหลานหลวง เเขวงคลองมหานาค เขตป้อมปราบ 10100',
          picture:'./images/oby.jpg',
          age: 22,
          major:'คอมพิวเตอร์'
        
      },
        
      {
        _id: '5056',
        name:'เทน้า พะสะหวัด',
        email: 'phasavath@gmail.com',
        address: '210/1-2 ถนนหลานหลวง เเขวงคลองมหานาค เขตป้อมปราบ 10100',
        picture:'./images/oby.jpg',
        age: 24,
        major:'คอมพิวเตอร์'
    },
   
    


]
export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1>ติดต่อเรา</h1>
                {users.map(user =>
                <Card>
                <div key={user.id}>
                    <Row>
                <CardBody>
                <CardTitle>รหัสนักศึกษา{user._id}</CardTitle>
                <CardTitle>{user.name}</CardTitle>
                <CardTitle>E-mail:{user.email}</CardTitle>
                <CardTitle>ที่อยู่ {user.address}</CardTitle>
                
                </CardBody>
                </Row>
                 
                  
                </div>
                </Card>


                )

                }

            </div>
        )
    }
}



    







    
