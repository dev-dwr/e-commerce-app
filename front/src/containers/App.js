import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Toolbar from '../components/UI/Toolbar/Toolbar'
import SideDrawer from '../components/UI/SideDrawer/SideDrawer'
import Backdrop from '../components/UI/Backdrop/Backdrop'
import ProductList from '../components/ProductList/ProductList'

class App extends Component {
  state = {
    sideDrawerOpen: false
  }
  hamburgerClickHandler = () => {
    this.setState((prevState) => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    })
  }
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }
  render() {
    let backdrop = null
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop backdropClicked={this.backdropClickHandler} />
    }


    
    return (
      <Fragment>
        <div className="app_container">
            <Toolbar hamburgerClicked={this.hamburgerClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        <Switch>
          <Route to ="/" exact component = {ProductList}/>
        </Switch>
        </div>
      </Fragment>
    );
  }
}

export default App;