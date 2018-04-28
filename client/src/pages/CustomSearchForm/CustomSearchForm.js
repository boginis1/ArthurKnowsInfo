import React from "react";

const CustomSearchForm = props =>(
  <form>
    <div className="form-group">
      <label htmlFor="fistName">First Name:</label>
      <input
        autocomplete="off"
        onChange={props.handleInputChange}
        value={props.value.firstName}
        name="firstName"
        type="text"
        className="form-control"
        placeholder="First Name"
        id="firstName"
      />
       <label htmlFor="lastName">Last Name:</label>
      <input
        autocomplete="off"
        onChange={props.handleInputChange}
        value={props.value.lastName}
        name="lastName"
        type="text"
        className="form-control"
        placeholder="Last Name"
        id="lastName"
      />
       <label htmlFor="company">Company:</label>
      <input
        autocomplete="off"
        onChange={props.handleInputChange}
        value={props.value.company}
        name="company"
        type="text"
        className="form-control"
        placeholder="Company"
        id="company"
      />
       <label htmlFor="Twitter Handle">Twitter Handle:</label>
      <input
        autocomplete="off"
        onChange={props.handleInputChange}
        value={props.value.twitterHandle}
        name="twitterHandle"
        type="text"
        className="form-control"
        placeholder="Twitter Handle"
        id="twitterHandle"
      />
      <br />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Search
      </button>
    </div>
  </form>

);

  export default CustomSearchForm;
