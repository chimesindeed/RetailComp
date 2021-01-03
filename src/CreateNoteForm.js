import React from 'react'
import * as ADAPTER from './adapter.js'
import { connect } from 'react-redux'
import { GET_STORE, SELECTED_STORE } from './redux/actions'
import { withRouter } from 'react-router-dom'

class CreateNoteForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      note_body: ""
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.props.store_id)
    
    const store_id = this.props.store_id 
    const note_body = this.state.note_body
    return(
      ADAPTER.createNote(
        note_body,
        store_id
      )
        .then(this.props.SELECTED_STORE())
        .then(res=>{this.props.GET_STORE(res)})
        .then(this.props.history.push('/stores'))
    )

  }
    
  render = () => { 
    return(
      <div>
        <form onSubmit={this.handleSubmit} style={{justifyContent: 'left'}}>
          <h2>Note:</h2>
          <textArea
            onChange={(e)=>{this.setState({note_body: e.target.value})}}value={this.state.note_body}
          />

          <input type='submit' value='Create Store'/>
        </form>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{ 
  return ({store_id: state.store_id}) }

export default withRouter(connect(mapStateToProps, { GET_STORE, SELECTED_STORE })(CreateNoteForm))