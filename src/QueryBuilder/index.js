import React from 'react'
import 'antd/dist/antd.css'
import {Card} from 'antd'

import Controller from './Controller'
import Rule from './Rule'

class QueryBuilder extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card>
        <Controller />
        <Rule />
      </Card>
    )
  }
}

export default QueryBuilder
