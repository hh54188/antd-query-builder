import React from 'react'
import {Card} from 'antd'
import QueryBuilder from '../QueryBuilder'
import {fromJS} from 'immutable'

import './index.less'

/*
 操作类型

 组
  添加组
  删除组
  修改“关系”
 规则
  添加规则
  删除规则
  复制规则
  改变 field
  改变 operattion
  改变 value
 */

const data = fromJS({
  type: 'group',
  relation: 'OR',
  data: [
    {
      type: 'rule',
      data: {
        precondition: '',
        field: 'a',
        operation: 'EQUAL',
        value: '1',
      },
    },
    {
      type: 'rule',
      data: {
        precondition: '',
        field: 'a',
        operation: 'NOT_EQUAL',
        value: '1',
      },
    },
    {
      type: 'rule',
      data: {
        precondition: '',
        field: 'a',
        operation: 'GREATER',
        value: '1',
      },
    },
    {
      type: 'group',
      relation: 'AND',
      data: [
        {
          type: 'rule',
          data: {
            precondition: '',
            field: 'a',
            operation: 'EQUAL',
            value: '1',
          },
        },
        {
          type: 'rule',
          data: {
            precondition: '',
            field: 'a',
            operation: 'NOT_EQUAL',
            value: '1',
          },
        },
        {
          type: 'group',
          relation: 'AND',
          data: [
            {
              type: 'rule',
              data: {
                precondition: '',
                field: 'a',
                operation: 'EQUAL',
                value: '1',
              },
            },
            {
              type: 'rule',
              data: {
                precondition: '',
                field: 'a',
                operation: 'NOT_EQUAL',
                value: '1',
              },
            },
          ],
        },
      ],
    },
  ],
})

const fieldsList = fromJS(['a', 'b', 'c'])

const fieldsDict = fromJS({
  a: {
    optional_values: [1, 2, 3],
  },
})

const operations = fromJS([])

class App extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  onChange(query) {
    console.log(query)
  }
  render() {
    return (
      <Card>
        <QueryBuilder
          onChange={this.onChange}
          fieldsList={fieldsList}
          query={data}
        />
      </Card>
    )
  }
}

export default App
