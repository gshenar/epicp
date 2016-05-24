import React from 'react';
import ImageCard from "./ImageCard";

class ImageCardList extends React.Component {

	componentDidMount = () => console.log(this.props);

	render() {
	  	return (
	  		<div>
	    		{this.props.images.map(function(singularReport) {
					var a = 1000;
			    	return <ImageCard {...singularReport} />
			    })}
		    </div>
		);
	}
};

export default ImageCardList;