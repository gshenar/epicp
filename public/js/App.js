import React from "react";
import { render } from 'react-dom'
import _ from "underscore";
import $ from "jquery";
import dateUtils from "date-utils";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from "./Main";
import ImagesPage from './Components/ImagesPage';
import UploadPage from './Components/UploadPage'; 

require("../styles/body.less");

$(function() {
	injectTapEventPlugin();

	 render((
	  <Router history={hashHistory}>
	    <Route path="/" component={Main}>
	      <IndexRoute component={ImagesPage} />
	      <Route path="upload" component={UploadPage} />
	      <Route path="photos" component={ImagesPage} />
	    </Route>
	  </Router>), 
	  document.body);
});