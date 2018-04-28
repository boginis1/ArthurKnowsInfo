import React from "react";
import { Col, Row, Container } from "../Grid";

export const Shared = props => (
	<div>
		<Container fluid>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<h1>Your Shared Connections</h1>
				</Col>
			</Row>
			<Row>
				{props.shared.map(shared => (
					<Col key={shared.url} size="xs-3 sm-3 md-3 lg-3">
						<a href={shared.url} key={shared.url}>{shared.name}</a>
					</Col>
				))}
			</Row>
		</Container>
	</div>
);
