import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import "./FAQ.css";
import { Link } from 'react-router-dom';


const FAQ = props => (
	<div>
		<Panel>
			<Container fluid>
				<Row>
					<Col size="lg-12 md-12 sm-12 xs-12">
						<h1>Frequently Asked Questions</h1>
						<h2>1. Is Arthur a Russian bot? </h2>
						<p> Under advice of counsel we decline to answer that question.</p>

						<h2>2. Okay but is Arthur digging up top secret information?</h2>
						<p>All the information that Arthur returns to you is available to the public.  We just save you the time of going to different applications and running searches – we go to those sites, run those searches and simply return the results to you in one spot.</p>

						<h2>3. Arthur didn’t return a lot of information about my prospect, why?</h2>
						<p>Some people are cautious about leaving a digital footprint.  If they don’t have much of an online presence, our only alternative to providing you information would be to make up some information.  And we decided against that.</p>

						<h2>4. Is Arthur storing my calendar information?</h2>
						<p>No, we save some of the company data you search for in order to return results to you more quickly if you search the same person again, but other than that, we are not storing any of your appointment information.</p>

						<h2>5. If I don’t know a prospect’s email address or company name, will I still get good results?</h2>
						<p>The more information you provide us, the better search criteria we can use.  However, depending on how common a name is, or how active your prospect is online, we can still return very good information.</p>

						<h2>6. What if I don’t have a google account, can I still use Arthur? </h2>
						<p>Currently you can request a custom search even without logging into Arthur.  We won’t be able to access your calendar appointment info, so you will simply need to type in your search information.</p>
					</Col>
				</Row>
			</Container>
		</Panel>
		
	</div>
);

export default FAQ;