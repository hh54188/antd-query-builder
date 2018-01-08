import React from 'react'
import {Input, Select, Form, Button, Icon} from 'antd'

import PRE_CONDITIONS from './constants/PRE_CONDITIONS'
import CONDITIONS from './constants/CONDITIONS'

const {Item: FormItem} = Form
const {Option} = Select
const {Group: ButtonGroup} = Button

import './index.less'

function Rule() {
  const preConditionKeys = Object.keys(PRE_CONDITIONS)
  const conditionKeys = Object.keys(CONDITIONS)

  return (
    <div className="Rule">
      <Select
        className="Rule__PreCondition Rule__Item"
        value={preConditionKeys[0]}
      >
        {preConditionKeys.map(preConditionKey => (
          <Option key={preConditionKey} value={preConditionKey}>
            {PRE_CONDITIONS[preConditionKey]}
          </Option>
        ))}
      </Select>
      <Select className="Rule__Option Rule__Item" />
      <Select className="Rule__Condition Rule__Item" value={conditionKeys[0]}>
        {conditionKeys.map(conditionKey => (
          <Option key={conditionKey} value={conditionKey}>
            {CONDITIONS[conditionKey]}
          </Option>
        ))}
      </Select>
      <Input className="Rule__Value Rule__Item" />
      <ButtonGroup className="Rule__Item">
        <Button icon="copy" />
        <Button icon="delete" type="danger" />
      </ButtonGroup>
    </div>
  )
}

export default Rule
