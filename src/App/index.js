import React from 'react'
import QueryBuilder from '../QueryBuilder'

import './index.less'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <QueryBuilder />
      </div>
    )
  }
}

export default App
