import React from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Papers from "./Papers/Papers";
import Models from "./Models/Models";
import Interventions from "./Interventions/Interventions";
import Vectors from "./Vectors/Vectors";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "home",
    };
    //bind this
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick(i) {
    this.setState({ content: i });
  }

  switchContent() {
    switch (this.state.content) {
      case "paper":
        return <Papers />;
      case "model":
        return <Models />;
      case "vector":
        return <Vectors />;
      case "intervention":
        return <Interventions />;
      default:
        return <Home />;
    }
  }
  render() {
    return (
      <div class="container-fliud">
        <Row>
          <Col>
            <Header click={this.handleHeaderClick} />
          </Col>
        </Row>
        {this.switchContent()}
        <Row>
          <Col>About</Col>
        </Row>
      </div>
    );
  }
}

export default App;
