import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import Meetings from "../../components/Meetings";
import "./Weekly.css";
import meetingData from "../../components/Meetings/data/meetingData.json";
import PropTypes from "prop-types";


class Weekly extends React.Component {
	static contextTypes = {
    router: PropTypes.object
  }
	constructor (props) {
		super(props);
		this.props.updatePage('Weekly');
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
}

export default Weekly;