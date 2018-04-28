import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import Meetings from "../../components/Meetings";
import "./Daily.css";
import meetingData from "../../components/Meetings/data/singleMeetingData.json";

class Daily extends React.Component {
	constructor (props) {
		super(props);
		this.props.updatePage('Daily');
	}

	render () {
		return (

			<div>
				{meetingData.map(meetingData => (
					<div key={meetingData.linkedin}>
						<Panel>
							<Container fluid>
								<Row>
									<Col size="lg-12 md-12 sm-12 xs-12">
										<Meetings
											meetingData={meetingData}
											location={this.props.location}
										/>
									</Col>
								</Row>
							</Container>
						</Panel>
					</div>
				))}
			</div>
		);
	}
};

export default Daily;