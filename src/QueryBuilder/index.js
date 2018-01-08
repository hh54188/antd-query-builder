import React from 'react'
import 'antd/dist/antd.css'
import {Card} from 'antd'

import Group from './Group'

class QueryBuilder extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card>
        <Group />
      </Card>
    )
  }
}

export default QueryBuilder
