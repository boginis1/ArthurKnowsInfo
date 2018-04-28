import React from "react";
import { Col, Row, Container } from "../Grid";

export const Posts = props => (
	<div>
		<Container fluid>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<h1>{props.header}</h1>
					{props.post.map(post => (
						<p key={post.text}>{post.text}</p>
					))}
				</Col>
			</Row>
		</Container>
	</div>
);
