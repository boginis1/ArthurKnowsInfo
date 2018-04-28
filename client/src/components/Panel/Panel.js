import React from "react";
import "./Panel.css";

const Panel = ({ children }) => (
	<div className="panel panel-default">
		<div className="panel-body">
			{children}
		</div>
	</div>
);

export default Panel;
