import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Agnieszka'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps (props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount () {
        console.log ('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
      console.log ('LifecycleB shouldComponentRender')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('LifecycleB GetSnapshotBeforeUpdate')
      return null
    }

    componentDidUpdate() {
      console.log('LifcycleB componentDiDUpdate')
    }

  render() {
    console.log ('LifecycleB render')
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB