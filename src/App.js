import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  // Conditional rendering Using if else
  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return <button type="button">Logout</button>
  //     }
  //     return <button type="button">Login</button>
  //   }

  render() {
    const {isLoggedIn} = this.state

    // Conditional Rendering Using Element Variables
    // let authButton
    // if (isLoggedIn === true) {
    //   authButton = <button type="button">Logout</button>
    // } else {
    //   authButton = <button type="button">Login</button>
    // }

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {/* {this.renderAuthButton()} */}
        {/* {authButton} */}
        {/* Conditional rendering using Ternary operater */}
        {/* {isLoggedIn ? (
          <button type="button">Logout</button>
        ) : (
          <button type="button">Login</button>
        )} */}
        {/* conditional rendering using logical operator */}
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App
