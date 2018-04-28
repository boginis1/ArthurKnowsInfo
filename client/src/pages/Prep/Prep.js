import React, { Component } from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import "./Prep.css";
// var Twitter = require('twitter');
import Twitter from "twitter";
import { Redirect } from 'react-router-dom';

class Prep extends Component {
	state = {
		bingOne: false,
		bingTwo: false,
		twitter: false,
		nyTimes: false,
		redirect: false,
		resultHeadlines: [],
		resultTwitter: [],
		resultProfile: {}
	};

	componentDidMount() {
		this.runSearch();
	};

	componentDidUpdate() {
		if(this.state.bingOne && this.state.bingTwo && this.state.twitter && this.state.nyTimes) {
			return <Redirect to='/results' >
		}
	};

	runBing = () => {
		API.postBing(this.props.fName, this.props.lName, this.props.company)
		   .then(function() {
		   		if(this.state.bingOne) {
		   			this.setState({ bingTwo: true})
					if(this.state.bingOne && this.state.bingTwo && this.state.twitter && this.state.nyTimes) {
						this.setState({
							redirect: true
						});
					}
		   		}
		   		else {
			   		this.setState({ bingOne: true });
			   	}
		   })
		   .catch(err => console.log(err));
	}

	runTwitter = () => {
		// Initialize the search
		var client = new Twitter({
			consumer_key: "FWGqF55QiOD5JzTIZhGdPu4Ac",
			consumer_secret: "3Q8vkpdJv5AFMHA8VOLE0KQJKYgneZUYclciWpFy5XiaxDmojQ",
			access_token_key: "34366368-aAtHhm6wCrKkJY6C6Wu6dbHfpvbRpyQWY21VG6GZ6",
			access_token_secret: "W21QNsRMIFFeS1YeNk6LC0Dn6oOqLzNsXtn1AsTK5dl7t"
		});

		// Hold the key & value of the results
		let tweetHolder = [];

		// Setup the parameters
		var params = {
			q: this.props.twitterHandle,
			count: 3
		}

		client.get('statuses/user_timeline', params, function(err, data, response) {
			if (err) {
				throw err;
				console.log("can't get tweets");
			}
			//var tweets = data;
			//console.log(data)
			//if (user.screen_name) === hzoba {
			for (var i = 0; i < data.length; i++) {
				// Push the tweet IDs into an array of objects
				tweetHolder.push({
					id: data[i].id
				});
			}
			console.log(tweetHolder);

			var { description } = data[0].user;
			var { profile_image_url } = data[0].user
			this.setState({
				resultProfile {
					img: profile_image_url,
					description: description
				}
			});

			// Mark the Twitter results as complete
			this.setState({twitter: true});
			if(this.state.bingOne && this.state.bingTwo && this.state.twitter && this.state.nyTimes) {
				this.setState({
					redirect: true
				});
			}

			// Verify results have been added correctly
			console.log(this.state.resultTwitter);
			console.log(this.state.twitter);
		});		
	};

	runNYTimes = () => {
		// Set the number of articles to return
		var numArticles = 3;

		// Initialize the search
		var queryURLBase =
		  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="
		  + "a830dde6a9634e7395ffbace401c20ee"
		  + "&q="
		  + this.props.company;

		// The AJAX function uses the queryURL and GETS the JSON data associated with it.
		// The data then gets stored in the variable called: "NYTData"
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(NYTData) {
			// Logging the URL so we have access to it for troubleshooting
			console.log("------------------------------------");
			console.log("URL: " + queryURL);
			console.log("------------------------------------");
			// Log the NYTData to console, where it will show up as an object
			console.log(NYTData);
			console.log("------------------------------------");
			// Setup the temporary array that will hold the resulting objects
			let headlineArray = [];
			// Loop through and provide the correct number of articles
			for (var i = 0; i < numArticles; i++) {
				// Create a temp object that will be pushed to the state's result array
				let articleInfo = {};

				// Confirm that the specific JSON for the article isn't missing any details
				// If the article has a headline include the headline in the HTML
				if (NYTData.response.docs[i].headline !== "null") {
					articleInfo.headline = NYTData.response.docs[i].headline.main;

					// Log the first article's headline to console
					console.log(NYTData.response.docs[i].headline.main);
				}

				// If the article has a byline include the headline in the HTML
				if (NYTData.response.docs[i].snippet) {
					articleInfo.blurb = NYTData.response.docs[i].snippet;

					// Log the first article's Author to console.
					console.log(NYTData.response.docs[i].snippet);
				}

				// Update the remaining required data
				articleInfo.date = NYTData.response.docs[i].pub_date;
				articleInfo.link = NYTData.response.docs[i].web_url;

				// Log the remaining fields to console as well
				console.log(NYTData.response.docs[i].pub_date);
				console.log(NYTData.response.docs[i].section_name);
				console.log(NYTData.response.docs[i].web_url);

				// Push the current result into the headlineArray
				headlineArray.push(articleInfo)});
			}

			// Update the state's result object with the stored headlines
			this.setState({
				headlines: headlineArray
			})

			// Mark the NYTimes state as complete
			this.setState({nyTimes: true});
			if(this.state.bingOne && this.state.bingTwo && this.state.twitter && this.state.nyTimes) {
				this.setState({
					redirect: true
				});
			}

			// Verify results have been added correctly
			console.log(this.state.results.headlines);
			console.log(this.state.nyTimes);
		});
	}

	runSearch = () => {
		runBing();
		setTimeout(runBing, 4 * 1000);
		runTwitter();
		runNYTimes();
	}

	const { redirect, resultHeadlines, resultTwitter, resultProfile } = this.state;

	if (redirect) {
		return (<Redirect to={{
			pathname: '/results',
			state: {
				resultHeadlines: this.state.resultHeadlines,
				resultTwitter: this.state.resultTwitter,
				resultProfile: this.state.resultProfile
			}
		}} />);
	}

	render() {
		return (
			<Panel>
				<Container fluid>
					<Row>
						<Col size="lg-1 md-1 sm-1 xs-1">{this.state.bingOne ? (...) : ( ! )}</Col>
						<Col size="lg-11 md-11 sm-11 xs-11">Searching for personal information</Col>
					</Row>
					<Row>
						<Col size="lg-1 md-1 sm-1 xs-1">{this.state.bingTwo ? (...) : ( ! )}</Col>
						<Col size="lg-11 md-11 sm-11 xs-11">Searching for company records</Col>
					</Row>
					<Row>
						<Col size="lg-1 md-1 sm-1 xs-1">{this.state.twitter ? (...) : ( ! )}</Col>
						<Col size="lg-11 md-11 sm-11 xs-11">Searching for Twitter activity</Col>
					</Row>
					<Row>
						<Col size="lg-1 md-1 sm-1 xs-1">{this.state.nyTimes ? (...) : ( ! )}</Col>
						<Col size="lg-11 md-11 sm-11 xs-11">Searching for news</Col>
					</Row>
				</Container>
			</Panel>
		);
	}

export default Prep;
