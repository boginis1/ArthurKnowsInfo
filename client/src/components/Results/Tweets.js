import React from "react";
import { Col, Row, Container } from "../Grid";
import { Tweet } from 'react-twitter-widgets'

export const Twitter = props => (
	<div>
		<Container fluid>
			<Row>
				<Col size="lg-12 md-12 sm-12 xs-12">
					{
						props.tweets.map(tweet => (
							<Tweet tweetId={tweet.id_str} />
						))
					}
				</Col>
			</Row>
		</Container>
	</div>
);

/*
// { props.id.map(tweet => (
// 	<Tweet tweetId={tweet.id} key={tweet.id} />
// ))}
*/
