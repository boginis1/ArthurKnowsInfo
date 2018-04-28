import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import "./About.css";
import { Link } from 'react-router-dom';
import { Personal } from "../../components/Results";
import creators from "./creators.json";

class About extends React.Component {
	constructor (props) {
		super(props);
		this.props.updatePage('About');
	}

	render () {
		return (
			<div>
				<Panel>
					<Container fluid>
						<Row>
							<Col size="lg-12 md-12 sm-12 xs-12">
								<h1>About Arthur</h1>
								<p>Arthur is your personal digital assistant. Imagine that you are competing with another firm to land an important contract, and you both have meetings with an EVP. If all things are equal, it's basically a coin flip depending on who the EVP likes better.</p>
								<p>Let's make things uneven.</p>
								<p>Arthur will tell you about that EVP's personal and professional life and recent history. Has the company just made a big merger? You'll know all about it. Did the EVP just celebrate a milestone? Recognize it.</p>
								<p>Your competitor might make a similar product to yours. But with Arthur, he can't make a similar impression.</p>
								<p>Let's get to work!</p>
							</Col>
						</Row>
					</Container>
				</Panel>
				<Panel>
					<Container fluid>
						<Row>
							<Col size="lg-12 md-12 sm-12 xs-12">
								<h1>How Arthur Works</h1>
								<p>As a working professional, it's important to keep up a professional public image. As a company, it's vital to manage your PR through smart news releases. As an individual, it's fun to connect with others online.</p>
								<p>Like most people, Arthur has access to all of these points of reference from social media sites, news sources, RSS feeds, and online searches. Unlike most people, Arthur can find all of this information, organize it, and deliver it to you in seconds.</p>
								<p>Arthur only uses information that has been made publicly available. Arthur does not invade anyone's private life by searching for information that person hasn't made publicly available. We respect your privacy, and we respect your client's privacy as well.</p>
								<p>View our <Link to="/privacy">Privacy Statement</Link> for more information.</p>
							</Col>
						</Row>
					</Container>
				</Panel>
				<Panel>
					<Container fluid>
						<Row>
							<Col size="lg-12 md-12 sm-12 xs-12">
								<h1>Who Created Arthur</h1>
								{creators.map(creators => (
									<div key={creators.linkedin}>
										<Personal
											img={creators.img}
											name={creators.name}
											linkedin={creators.linkedin}
											title={creators.title}
											description={creators.description}
										/>
										<div className="hDivider center-block"></div>
									</div>
								))}
							</Col>
						</Row>
					</Container>
				</Panel>
			</div>
		)
	}
};

export default About;