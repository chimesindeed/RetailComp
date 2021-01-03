import React from 'react'
import { withRouter } from 'react-router-dom'
import { deleteNote } from './adapter.js'
import { connect } from 'react-redux'
import { asyncFetchStore, SELECTED_STORE } from './redux/actions'
import { SET_STORE_ID } from './redux/actions'

class Note extends React.Component {

  handleCreate = store_id => () => {
    console.log(this.props.store_id)
    this.props.SET_STORE_ID(store_id)
    this.props.history.push("/notes/create")
  }

  handleDelete = () => {
    deleteNote(this.props.note_id)
      .then(this.props.SELECTED_STORE())
      .then(this.props.asyncFetchStore(this.props.store_id))
      
  }

  render = () => {
    return (
      <div>
        <h2>{this.props.note_body}</h2>
        <button onClick={this.handleDelete}>Delete Note</button><button onClick={this.handleCreate(this.props.store_id)}>Create Note</button> 
        <p>-----</p>
     </div>
    )
  }
}
export default withRouter(connect(null, { asyncFetchStore, SELECTED_STORE, SET_STORE_ID })(Note))