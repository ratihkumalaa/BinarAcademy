import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function TitleList() {
  return (
    <Container className="my-4 text-center">
      <Row>
        <Col>
          <h4>ToDoList</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default TitleList;
