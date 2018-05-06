import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'


class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      health: 100,
      level: 1,
      lowLevelClass: 'danger-red'
    }
    this.clickedGirl = this.clickedGirl.bind(this)
  }

  // function to click on girl and decrease health
  clickedGirl() {
    this.setState({
      health: this.state.health - 25
    }, () => {
      console.log("hey I clicked the girl her health is now " + this.state.health);
    })
  }

  render () {
    return (
      <div id="parent"> 
        <Header />
        {/* If statement when background color is blue and less than 55 it turns red */}
        <div className={`blue-bg ${(this.state.health < 55) ? this.state.lowLevelClass : ''} `}>
          <div className={'user-info'}>
            <h3>Name: {this.state.name}</h3>
            <h3>Level: {this.state.level}</h3>
          </div>
          {/* To pass to other components and they become props when called */}
          <GirlImage bapeGirl={this.clickedGirl} health={this.state.health} />
        </div>
      </div>
    )
  }
}

// New component
class GirlImage extends Component {
  constructor () {
    super()
    this.state = {
      gameOver: 'sorry you are dead',
      expired: 'Your way beyond dead'
    }
  }

  render () {
    return (
      <div className="GirlImageComp"> 
        {/* image is an onclick button */}
        <img src="img/bape.png" alt={'girl with bape on'} onClick={this.props.bapeGirl} />
        {/* Adds another state with death of player once hits 0 */}
        <h3>Health: {(this.props.health <= 0) ? this.state.gameOver : this.props.health}</h3>
      </div>
    )
  }
}

const Header = function() {
  return (
    <header>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
