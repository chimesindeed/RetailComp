
import React from 'react'
import { connect } from 'react-redux'
import { INCREMENT } from './redux/actions'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  handleClick = () =>{
    return (this.props.INCREMENT())
  }
  render() {
    return (
      <div>
        <h1>App</h1>

        {this.props.week}

        <button onClick={this.handleClick}>increment</button>
      </div>
    );
  }

}
const mapStateToProps = (state) => {
  return ({week: state.week})
}
export default connect(mapStateToProps, {INCREMENT})(App)