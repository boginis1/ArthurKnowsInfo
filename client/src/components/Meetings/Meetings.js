import React from "react";
import "./Meetings.css";
import { Link, withRouter} from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import CalendarActivities from '../../utils/data';
import Moment from "moment";
// const Meetings = props => (
// 	<div key={props.meetingData.meetings[0].participants[0].email} >

// 		<h1>{props.meetingData.date}</h1>

// 		{props.meetingData.meetings.map(meetings => (
// 			<div key={meetings.participants[0].email} >
// 				<h2>{meetings.title}</h2>
// 				<Row>
// 					{meetings.participants.map(participants => (
// 						<Col size="xs-3 sm-3 md-3 lg-3" key={participants.email}>
// 							<Link to="/results">{participants.name}</Link>
// 						</Col>
// 					))}
// 				</Row>
// 			</div>
// 		))}
// 	</div>
// );

// export default Meetings;

class Meetings extends React.Component {



	state = {
		events: []
	}

	constructor (props) {
		super(props);
		this.state = {
			events: this.checkActivity(this.props.location.pathname)
		}
		console.log(this.checkActivity(this.props.location.pathname))
	}

	componentDidMount() {
	}

	checkActivity = (args) => {
		if(args.indexOf('daily') !== -1) {
			return  CalendarActivities.getToday();
		}

		if(args.indexOf('weekly') !== -1) {
			return  CalendarActivities.getWeek();
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.location !== this.props.location) {
			this.setState({events: this.checkActivity(nextProps.location.pathname)})
		}
	}

	render () {
		return (
			<div>
				<li>
					{this.state.events && this.state.events.map(( obj, index ) => (
						<div key={index.toString()}>
							<h4> Meeting Name: {obj.summary}</h4>
							<ul>

								<li>{Moment(obj.start.dateTime || obj.start.date).format('MMMM Do YYYY, h:mm:ss a')}</li>
									{obj.attendees && obj.attendees.map((data, index) => (
										<div key={`${index.toString()}-${data.displayName}`}>
												<li> {data.displayName} {data.email} </li>
												<li><Link to={`/search/custom?name=${data.displayName}`}
													state={{personInfo: {displayName: data.displayName, email: data.email}}}
													params={{personInfo: {displayName: data.displayName, email: data.email}}}
													> Research Me</Link></li>
										</div>
									// <li key={`${index.toString()}-${data.displayName}`}> {data.displayName} {data.email} </li>
									// 	<li key={`${index.toString()}-${data.displayName}`}> {data.displayName} {data.email} </li>
										// <li key={`${index.toString()}`}>(<button> Research Me</button>)</li>
								))}
							</ul>

						</div>
					))}
				</li>
			</div>
		)
	}

}

export default withRouter(Meetings);
