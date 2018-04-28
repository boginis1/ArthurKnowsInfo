import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import "./Settings.css";
import { Link } from 'react-router-dom';
// import profileData from "../Profile/profileData.json";
import ReactBootstrapSlider from 'react-bootstrap-slider';
import BootstrapSlider from 'bootstrap-slider/dist/css/bootstrap-slider.min.css';
import Calendar from '../Calendar';
import API from '../../utils/API';

class Settings extends React.Component {
	constructor (props) {
		super(props);
		this.props.updatePage('Settings');
	}

	state = {
		sarcasm: 0
	}

	componentWillMount() {
		const { profileData } = this.props
		this.setState(prevState => ({
			...prevState,
			...this.props.profileData
		}));
		console.log('state in will mount', this.state);
	}

	onSarcasmChangeHandler = (e, val) => {
		this.setState({
			sarcasm: e.target.value
		})
		console.log('on sarcasm change', this.state);
	}

	updateSarcasmHandler = async e => {
		e.preventDefault();
		console.log('updare sarcasm initialised!', this.state);
		try {
			const result = await API.saveUser(this.state);
			console.log('result!', result);
			alert('Sarcasm level updated!');
		} catch (e) {
			alert('Could not update the sarcasm level. Please try again.');
		}
	}

	render () {
		return (
			<Panel>
				<Container fluid>
					<Row>
						<Col size="lg-12 md-12 sm-12 xs-12">
							<h1>Settings</h1>
						</Col>
					</Row>
					<Row>
						<Col size="lg-12 md-12 sm-12 xs-12">
							<p>Link to your Google Calendar</p>
							<Calendar location="settings"/>
							<div className="hDivider center-block"></div>
						</Col>
					</Row>
					<Row>
						<Col size="lg-12 md-12 sm-12 xs-12">
							<h3>Arthur&#39;s Sarcasm Level</h3>
							<center>
								<ReactBootstrapSlider
									value={this.state.sarcasm}
									change={this.onSarcasmChangeHandler}
									slideStop={1}
									step={1}
									ticks = {[0, 1, 2]}
									ticks_labels = {["None", "Sometimes", "Intense"]}
									ticks_snap_bounds = { 1 }
									tooltip = "hide" />
								</center>
						</Col>
					</Row>

					<Row>
						<Col size="lg-12 md-12 sm-12 xs-12">
							<button onClick={this.updateSarcasmHandler} className="btn btn-success center-block">Save Changes</button>
						</Col>
					</Row>
				</Container>
			</Panel>
		);
	}
}

export default Settings;
