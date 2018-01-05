import React from 'react'
import {Input, Select, Form, Button, Icon} from 'antd'

import PRE_CONDITIONS from './constants/PRE_CONDITIONS'
import CONDITIONS from './constants/CONDITIONS'

const {Item: FormItem} = Form
const {Option} = Select

const SELECT_STYLE = {
  width: '120px',
}

function Rule() {
  const preConditionKeys = Object.keys(PRE_CONDITIONS)
  const conditionKeys = Object.keys(CONDITIONS)

  return (
    <div>
      <Select size="small" style={SELECT_STYLE} value={preConditionKeys[0]}>
        {preConditionKeys.map(preConditionKey => (
          <Option key={preConditionKey} value={preConditionKey}>
            {PRE_CONDITIONS[preConditionKey]}
          </Option>
        ))}
      </Select>
      <Select size="small" style={SELECT_STYLE} />
      <Select size="small" style={SELECT_STYLE} value={conditionKeys[0]}>
        {conditionKeys.map(conditionKey => (
          <Option key={conditionKey} value={conditionKey}>
            {CONDITIONS[conditionKey]}
          </Option>
        ))}
      </Select>
      <Input style={SELECT_STYLE} size="small" />
      <Button icon="delete" size="small" type="danger" />
    </div>
  )
}

export default Rule
