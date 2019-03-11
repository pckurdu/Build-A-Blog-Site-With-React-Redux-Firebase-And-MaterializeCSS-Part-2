import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
        {/* 6 pieces were used depending on the grid structure. */}
          <div className="col s12 m6">
            {/* here ProjectList Component  */}
            <ProjectList/>
          </div>
          {/* Depending on the grid structure, 5 pieces were used and 1 column was shifted. */}
          <div className="col s12 m5 offset-m1">
            {/* here Notifications Component  */}
            <Notifications/>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard