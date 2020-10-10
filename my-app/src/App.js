import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Papers from "./Papers/Papers";
import Models from "./Models/Models";
import Vector_list from "./Vectors/list";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "vectors",
    };
    //bind this
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(i) {
    this.setState({ content: i });
  }

  switchContent() {
    switch (this.state.content) {
      case "papers":
        return <Papers />;
      case "models":
        return <Models />;
      case "vectors":
        return <Vector_list />;
      default:
        return <Home />;
    }
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Header click={this.handleHeaderClick} />
          </Col>
        </Row>
        <Row>
          <Col>{this.switchContent()}</Col>
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
