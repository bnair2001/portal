import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './testActions'

const mapState = (state) => ({
  data: state.test.data
})

const actions = {
  incrementCounter,
  decrementCounter
}

class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>Archives</h1>
        
        
      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent)