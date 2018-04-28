import React from "react";
import { Col, Row, Container } from "../Grid";
import { Button, AnchorButton } from "@blueprintjs/core";

export const Personal = props => (
	<div>
		<Container fluid>
			<Row>
				<Col size="lg-3 md-3 sm-3 xs-12">
					<img className="img img-responsive img-circle center-block" src={props.img} />
				</Col>
				<Col size="lg-9 md-9 sm-9 xs-12">
					<h1>{props.name}</h1>
					<p>{props.linkedin}</p>
					<p>{props.title}</p>
					<p>{props.company}</p>
				</Col>
			</Row>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<p>{props.description}</p>
				</Col>
			</Row>
		</Container>
	</div>
);
