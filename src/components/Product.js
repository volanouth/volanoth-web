import React, { Component } from 'react'
import data from "../models/data";

import {
    Card, CardImg, CardText, CardBody, CardGroup, CardDeck,CardColumns,
    CardTitle, CardSubtitle, Button, Row, Col,
  } from 'reactstrap';


export default function Product(props) {
    //console.log(props.match.params.id);
    const item = data.products.find(x => x._id === props.match.params.id);

    return (
        <div>

            <Card key={item.id}>
              <Row>
                  <Col md={4}>
                <CardImg src={item.pic} />
                 </Col>
                  <Col md={8}>
                <CardBody>
                    <CardTitle> Code {item._id}</CardTitle>
                    <CardSubtitle>{item.name} </CardSubtitle>
                    <CardSubtitle> Price {item.price}</CardSubtitle>
                    <CardText>รายละเอียดสินค้า</CardText>
                    <Button color="secondary">เพิ่มสินค้าในตะกร้า</Button>
                </CardBody>
                  </Col>
              </Row>
            </Card>

        </div>
    )

}
