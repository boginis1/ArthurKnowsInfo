import React from "react";
import "./Arthur.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";

const Arthur = () => (
	<Container fluid>
		<Row>
			<Col size="md-12 sm-3 xs-3">
				<Link to="/"><img src="/img/Arthur-front.png" id="arthurImg" className="img img-responsive" /></Link>
			</Col>
			<Col size="md-12 sm-9 xs-9">
				<h1 className="arthurH1">This is Arthur's text area. Things he says will go here.</h1>
			</Col>
		</Row>
	</Container>
);

export default Arthur;
