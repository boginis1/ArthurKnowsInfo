import React from "react";
import { Col, Row, Container } from "../Grid";

export const Headlines = props => {
	console.log('props in headlines', props)
return (
	<div>
		<Container fluid>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					<h1>Company Headlines</h1>
					{props.stories.map(story => (
						<div>
							<a href={story.web_url} key={story.web_url}><h2>{story.print_headline}</h2></a>
							<p>{story.snippet}</p>
						</div>
					))}
				</Col>
			</Row>
		</Container>
	</div>
);
}
