import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import { Personal, Headlines, Posts, Shared, Twitter } from "../../components/Results";
import "./Results.css";
import headlinesData from "../../components/Results/data/headlines.json";
import linkedinData from "../../components/Results/data/linkedin.json";
import postsCompanyData from "../../components/Results/data/postsCompany.json";
import postsPersonData from "../../components/Results/data/postsPerson.json";
import sharedData from "../../components/Results/data/shared.json";
import twitterData from "../../components/Results/data/twitter.json";
import CalendarActivities from '../../utils/data';
import { Timeline } from 'react-twitter-widgets'
// PROPS INCLUDES THE FOLLOWING:
	// resultHeadlines: [],
	// resultTwitter: [],
	// resultProfile: {}

class Results extends React.Component {
	constructor (props) {
		super(props);
		this.props.updatePage('Results');
	}

	componentWillMount() {
		console.log('we are in results', this.props);
	}

	render () {
		return (

			<Panel>{console.log(this.props.personInfo)}
				<Container fluid>
					<Row>
						<Col size="lg-12 md-12 sm-12 xs-12">
						<Personal
							img={Reflect.get(this.props.bingSearchResults, 'img')}
							name={this.props.bingSearchResults.firstName + ' ' + this.props.bingSearchResults.lastName}
							company={this.props.bingSearchResults.company}
							description={Reflect.get(this.props.bingSearchResults, 'linkedInHeadline')}
						/>
						</Col>
					</Row>
					<Row>
						<Col size="lg-12 md-12 sm-12 xs-12">
							<div className="hDivider center-block"></div>
						</Col>
					</Row>
					<Row>
						<Col size="lg-5 md-5 sm-12 xs-12">
						<div>
							<img src={this.props.twitterSearchResults[0].user.profile_image_url_https} />
							<p>{this.props.twitterSearchResults[0].user.description}</p>
						</div>
						<Twitter
							header="Latest Tweets"
							tweets={this.props.twitterSearchResults}
						/>
						</Col>
						<Col size="lg-7 md-7 sm-12 xs-12">
						<Headlines
							stories={this.props.bingSearchResults}
						/>
						</Col>
					</Row>
				</Container>
			</Panel>
		);
	}
};

export default Results;

/*
<Personal
	img={this.props.resultProfile.img}
	name={linkedinData.name}
	linkedin={linkedinData.linkedin}
	title={linkedinData.title}
	company={linkedinData.company}
	description={this.props.resultProfile.description}
/>

<Headlines
	story={this.props.resultHeadlines}
/>
*/
