import React from 'react';
import {amber900} from 'material-ui/styles/colors';
import {amber600} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ImageCard from './Components/ImageCard';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/Menu';
import { RouteHandler } from 'react-router';

const styles = {
  container: {
    textAlign: 'center'
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: amber900,
    primary1Color: amber600
  }
});

class Main extends React.Component {
 
  constructor(props, context) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = (event) => {
	console.log(event); 
	this.setState({open: false});
  }
 
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
	        <Drawer
	          docked={false}
	          width={200}
	          open={this.state.open}
	          onRequestChange={(open) => this.setState({open})}
	        >
	        	<Menu
	        		onItemTouchTap={(event, menuItem) => { 
						this.context.router.push(menuItem.props.path);
	        		}}
	        	>
	          <MenuItem path={"photos"} onTouchTap={this.handleClose}>Browse Photos</MenuItem>
	          <MenuItem path={"upload"} onTouchTap={this.handleClose}>Upload your own photo</MenuItem>
	          <MenuItem path={"photos"} onTouchTap={this.handleClose}>Account</MenuItem>
	        	</Menu>
	        </Drawer>
	 
	        <header>
	          <AppBar title='Photos' onLeftIconButtonTouchTap={this.handleToggle}
	            isInitiallyOpen={true} />
	        </header>

	        {this.props.children}

        </div> 
      </MuiThemeProvider>
    );
  }
 
}
 
Main.contextTypes = {
	router: React.PropTypes.object
}

export default Main;