import React from "react";
import Panel from "../../components/Panel";
import { Col, Row, Container } from "../../components/Grid";
import "./Privacy.css";

class Privacy extends React.Component {
	constructor (props) {
		super(props);
		this.props.updatePage('Privacy');
	}

	render () {
		return (

			<Panel>
				<h1>Privacy Policy</h1>
				<p><i>Last Updated: April 10, 2018</i></p>
				<p>Protecting your private information is our priority. This Statement of Privacy applies to arthurknows.info, arthurknows.herokuapp.com, and Arthur Knows Info and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Arthur Knows Info include arthurknows.info. The Arthur Knows Info website is a news and information site. By using the Arthur Knows Info website, you consent to the data practices described in this statement.</p>
				 
				<h2>Collection of your Personal Information</h2>
				<p>Arthur Knows Info may collect anonymous demographic information, which is not unique to you, such as your gender.</p>
				 
				<p>We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services available on the Site. These may include: (a) registering for an account on our Site; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services on our Site. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.</p>
				 
				<h2>Sharing Information with Third Parties</h2>
				<p>Arthur Knows Info does not sell, rent or lease its customer lists to third parties.</p>
				 
				<p>Arthur Knows Info may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Arthur Knows Info, and they are required to maintain the confidentiality of your information.</p>
				 
				<p>Arthur Knows Info may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Arthur Knows Info or the site; (b) protect and defend the rights or property of Arthur Knows Info; and/or (c) act under exigent circumstances to protect the personal safety of users of Arthur Knows Info, or the public.</p>
				 
				<h2>Automatically Collected Information</h2>
				<p>Information about your computer hardware and software may be automatically collected by Arthur Knows Info. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Arthur Knows Info website.</p>
				 
				<h2>Links</h2>
				<p>This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>
				 
				<h2>Children Under Thirteen</h2>
				<p>Arthur Knows Info does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.</p>
				 
				<h2>Disconnecting your Arthur Knows Info Account from Third Party Websites</h2>
				<p>You will be able to connect your Arthur Knows Info account to third party accounts. BY CONNECTING YOUR ARTHUR KNOWS INFO ACCOUNT TO YOUR THIRD PARTY ACCOUNT, YOU ACKNOWLEDGE AND AGREE THAT YOU ARE CONSENTING TO THE CONTINUOUS RELEASE OF INFORMATION ABOUT YOU TO OTHERS (IN ACCORDANCE WITH YOUR PRIVACY SETTINGS ON THOSE THIRD PARTY SITES). IF YOU DO NOT WANT INFORMATION ABOUT YOU, INCLUDING PERSONALLY IDENTIFYING INFORMATION, TO BE SHARED IN THIS MANNER, DO NOT USE THIS FEATURE. You may disconnect your account from a third party account at any time. Users can disconnect their accounts from third-party sites by visiting the settings page and updating their account information.</p>
				 
				<h2>E-mail Communications</h2>
				<p>From time to time, Arthur Knows Info may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication.</p>
				 
				<p>If you would like to stop receiving marketing or promotional communications via email from Arthur Knows Info, you may opt out of such communications by Customers can opt out of email notifications from the settings page of the website..</p>
				 
				<h2>External Data Storage Sites</h2>
				<p>We may store your data on servers provided by third party hosting vendors with whom we have contracted.</p>
				 
				<h2>Changes to this Statement</h2>
				<p>Arthur Knows Info reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our site, and/or by updating any privacy information on this page. Your continued use of the Site and/or Services available through this Site after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.</p>
				 
				<h2>Contact Information</h2>
				<p>Arthur Knows Info welcomes your questions or comments regarding this Statement of Privacy. If you believe that Arthur Knows Info has not adhered to this Statement, please contact Arthur Knows Info at:</p>
				 
				<h3>Arthur Knows Info</h3>
				<p>PO Box 172<br />
				Chandler, Arizona 85226</p>
				 
				<h3>Email Address</h3>
				<p>info@arthurknows.info</p>
				 
				<h3>Telephone number</h3>
				<p>6146382194</p>
			</Panel>
		);
	}
};

export default Privacy;