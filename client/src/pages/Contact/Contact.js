import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import "./Contact.css";
import { Link } from 'react-router-dom';

class Contact extends React.Component {
	constructor (props) {
		super(props);
		this.props.updatePage('Contact');
	}

	render () {
		return (
			<div>
				<Panel>
					<Container fluid>
						<Row>
							<Col size="lg-12 md-12 sm-12 xs-12">
								<h1>Contact Us</h1>
								<p>We hope you are enjoying Arthur.  If you have questions, comments or recommendations about Arthur, please feel free to contact us.</p>
								<p>Arthur Knows Info</p>
								<p>PO Box 172</p>
								<p>Chandler, AZ 85226</p>
								<p>Phone: 614.638.2194</p>
								<p><a href="mailto:holly@scoutsimply.com">Info@scoutsimply.com</a></p>
							</Col>
						</Row>
					</Container>
				</Panel>
				
			</div>
		)
	}
};

export default Contact;