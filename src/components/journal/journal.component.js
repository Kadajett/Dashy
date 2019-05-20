import React, { Component } from 'react'
import "./journal.scss";

export default class Journal extends Component {
  render() {
    return (
      <div className="journalWrapper">
        <h2 className="subText">Journal</h2>
        <div className="inputGroup">
            <input type="text" name="Journal Input" id="journalInput"/>
            <button>Save</button>
        </div>
        
      </div>
    )
  }
}
