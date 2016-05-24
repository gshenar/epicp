import React from 'react';
import {amber900} from 'material-ui/styles/colors';
import {amber600} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/divider';
import ImageCard from './ImageCard';
import ImageCardList from './ImageCardList';
import AppBar from './AppBar';
import Drawer from './Drawer';
import _ from 'underscore';


class ImagesPage extends React.Component {

  	constructor(props) {
    	super(props);
    	this.state = { images: [] };
	}

	componentDidMount = () => {

	firebase.database().ref("images").once("value").then((images) => {
			var imageState = _.each(images.val(), function(imageData) {
				firebase.storage().ref("images/" + imageData.path).getDownloadURL().then((url) => {
					this.setState((prevState) => {
						prevState.images.push({
							name: imageData.path,
							imageSource: url,
							title: imageData.title,
							caption: imageData.caption,
							subtitle: imageData.location
						});
						return prevState;
					});	
				});
			}, this);
		});
		
	}

  render() {
    return (
    	<div>
		    <ImageCardList images={this.state.images} />

			<ImageCard
				name={"k9sbIXu.jpg"} 
				imageSource={"https://firebasestorage.googleapis.com/v0/b/project-7599453502074300694.appspot.com/o/images%2Fk9sbIXu.jpg?alt=media&token=1284d5a3-076c-4d6d-93aa-ea2961711a1c"} 
				title= {"Good Morning"}
				caption= {"Grand Canyon National Park"}
				subtitle= {"Subtitle"} />
			<ImageCard
				name={"k9sbIXu.jpg"} 
				imageSource={"https://firebasestorage.googleapis.com/v0/b/project-7599453502074300694.appspot.com/o/images%2Fs1600_D30_0355.jpg?alt=media&token=ad3df43a-7121-488f-9f3a-fc536b2cb830"} 
				title= {"Short Break"}
				caption= {"Some cool place"}
				subtitle= {"Subtitle"} />
			<ImageCard
				name={"k9sbIXu.jpg"} 
				imageSource={"https://firebasestorage.googleapis.com/v0/b/project-7599453502074300694.appspot.com/o/images%2FCe467ItWQAAaf7r.jpg?alt=media&token=455fa5bc-f928-44ad-8814-bf0a23780c66"} 
				title= {"Sunset"}
				caption= {"Middle of nowhere"}
				subtitle= {"Subtitle"} />
		</div>
    );
  }
}

export default ImagesPage;