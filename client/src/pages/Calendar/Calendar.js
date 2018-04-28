import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import "./Calendar.css";
import { Col, Row, Container } from "../../components/Grid";
import CalenderActivities from '../../utils/data';

moment().format();


  const Welcome = () => (<div> 
  <h1 className="text-center loginTitle">Welcome To</h1> <h1 className="text-center loginTitle">A R T H U R</h1>
            </div> )
            

class App extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      showAuthButton: false,
      showSignOutButton: false
    };
    this.initClient = this.initClient.bind(this);
    this.updateSigninStatus = this.updateSigninStatus.bind(this);
  }
  handleAuthClick(){
    window.gapi.auth2.getAuthInstance().signIn();
  }
  handleSignoutClick(){
    window.gapi.auth2.getAuthInstance().signOut();
  }
  handleClientLoad() {
    window.gapi.load('client:auth2', this.initClient);
  }
  initClient(DISCOVERY_DOCS, CLIENT_ID, SCOPES) {

    let that = this;
    window.gapi.client.init({
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      clientId: '1078553084952-d48o52dsfbc7qjg9vavlc33m67e3jbp8.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/calendar'
    }).then(function () {
      console.log(window.gapi);
      // Listen for sign-in state changes.
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus, that);

      // Handle the initial sign-in state.
      that.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    }).catch((err) => console.log(err));
  }

  updateSigninStatus (isSignedIn) {
    if (isSignedIn) {
      if(this.props.location && this.props.location.indexOf('settings') !== -1) {
        
        this.setState({
          showAuthButton: false,
          showSignOutButton: true
        })
        this.getEvents();
      }
    } else {
      if(this.props.location && this.props.location.indexOf('settings') !== -1) {
        this.setState({
          showAuthButton: true,
          showSignOutButton: false
        })
      }
    }
  }

  componentDidMount(){
    this.handleClientLoad()
  }

  getEvents = () =>{
    let weekAhead =  moment().add(7, 'days')
    
    let that = this;
    function start() {
      window.gapi.client.init({
        'apiKey': 'AIzaSyAapMpWrO2ixD19IKraHoulluHMNkIWyLo',
      }).then(function() {
        
        return window.gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'timeMax': new Date(weekAhead).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'orderBy': 'startTime',
        })
      }).then( (response) => {
        console.log(response.result.items);
        const todaysDate = moment(new Date());
        let eventItems = response.result.items;
        if (eventItems
            .length) {
        
          let todaysArray = [];
          let weekArray = [];
          

          eventItems.map((event, i) => {
            const start = moment(event.start.dateTime || event.start.date);
           
            let presentDate = moment(new Date(start));
            let difference = presentDate.diff(todaysDate, 'days');
            if(difference === 0) {
              todaysArray.push(event);
            }

            if(difference > 0) {
              weekArray.push(event);
            }
            // console.log(`${start} - ${event.summary}`);
            if(event.attendees) {
              for (var i = 0; i < event.attendees.length; i++) {
                // console.log(`${event.attendees[i].displayName} - ${event.attendees[i].email}`);
              }
            }
          });

          CalenderActivities.today(todaysArray);
          CalenderActivities.week(weekArray);
        }
      }, function(reason) {
        // console.log(reason);
      });
    }
    window.gapi.load('client', start)
  }


  render(){
    let authButton = <button className="img img-responsive center-block calButton" id="authorize-button" onClick={this.handleAuthClick.bind(this)}></button>
    let signOutButton = <button className="img img-responsive center-block calSignOutButton" id="signout-button" className="calSignOutButton" onClick={this.handleSignoutClick.bind(this)}></button>
    return(
      <Container fluid>
        <Row>
          <Col size="lg-12 md-12 sm-12 xs-12">
          {/*this.props.login ? null : <Welcome/> */}
            
            <div className="container">
              {this.state.showAuthButton ? authButton : null}
              {this.state.showSignOutButton ? signOutButton : null}
            </div>
          </Col>
        </Row>
      </Container>

    )
  }
}

export default App;

