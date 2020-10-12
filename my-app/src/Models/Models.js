import React from "react";
import katex from "katex";
import ReactMarkdown from "react-markdown";
import { ModelMermaid } from "../Mermaid/Models";

class Models extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
    };
  }
  componentDidMount() {
    const modelsMarkdown = require("./Models.md");
    fetch(modelsMarkdown)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        this.setState({
          markdown: text,
        });
      });
  }

  render() {
    return (
      <div>
        <ModelMermaid />
      </div>
    );
  }
}

export default Models;
