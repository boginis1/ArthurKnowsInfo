import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    book: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id

  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this. setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Col size="md-8 sm-12">
        <Jumbotron>
          <h1>
            {this.state.book.title} by {this.state.book.author}
          </h1>
        </Jumbotron>
      </Col>
    );
  }
}

export default Detail;
