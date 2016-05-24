import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class ImageCard extends React.Component {
	render() {
	  	return (
			<div>
				  <Card>
				    <CardHeader
				      title={this.props.name}
				      subtitle={this.props.subtitle}
				      avatar={this.props.avatarSource} //"http://lorempixel.com/100/100/nature/"
				    />
				    <CardMedia
				      overlay={<CardTitle title={this.props.title} subtitle={this.props.caption} />}
				    >
				      <img src={this.props.imageSource} />
				    </CardMedia>
				  </Card>
		    </div>
		);
	}
};

export default ImageCard;