import React from 'react';
import TextField from 'material-ui/TextField';
import Dropzone from "react-dropzone";
import RaisedButton from 'material-ui/RaisedButton';

class UploadsPage extends React.Component {

  	constructor(props) {
    	super(props);
    	this.state = { files: [] };
	}

    onDrop = (files) => {
    	this.setState({files: files});
    }

    submitUpload = function() {
    	var file = this.state.files[0];
    	
    	var errorFound = false;
    	if (!file) {
    		errorFound= true;
    	}
    	if (!this.refs.title.state.hasValue) {
    		this.refs.title.setState({errorText: "Please enter a title."});
    		errorFound= true;
    	}
    	if (!this.refs.caption.state.hasValue) {
    		this.refs.caption.setState({errorText: "Please enter a caption."});
    		errorFound= true;
    	}
    	if (!this.refs.location.state.hasValue) {
    		this.refs.location.setState({errorText: "Please enter a location."});
    		errorFound= true;
    	}
    	if(errorFound) {
    		return;
    	} else {
	    	var storageRef = firebase.storage().ref("images");
			var uploadTask = storageRef.child(file.name).put(file);
			var databaseRef = firebase.database().ref().child("images");
			databaseRef.push({
				path: file.name,
				title: "photoTitle",
				caption: "caption",
				location: "location"
			});	
    	}
    }


  render() {

   	var dropzoneStyle = {
   		margin: "auto",
   		marginTop: "10px",
   		marginBottom: "10px",
   	    width: "200px",
    	height: "200px",
    	border: "2px dashed rgb(102, 102, 102)",
    	borderRadius: "5px"
   	}

    return (
		<div> 
		    <TextField
		    	ref= "title"
	     		hintText="Photo Title" />
	     	<br />
		    <TextField
		    	ref= "caption"
	     		hintText="Caption" />
	     	<br />
	     	<TextField
	     		ref= "location"
	     		hintText="Location" />
	     	<br />

            <Dropzone style={dropzoneStyle} multiple={false} ref="dropzone" onDrop={this.onDrop} >
              {this.state.files.length > 0 ? <div> <img style={{height:"200px", width:"200px"}} src={this.state.files[0].preview} /> </div>
              	: <div>Drag an image here or click to upload</div> }
            </Dropzone>

            <RaisedButton label="Upload your Photo" onMouseUp={this.submitUpload.bind(this)} primary={true} />
     </div>
    );
  }
}

export default UploadsPage;