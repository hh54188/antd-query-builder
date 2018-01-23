import React from 'react'
import classNames from 'classnames'
import {Input, Select, Button} from 'antd'

import {OPERATION_LIST, OPERATION_DICT} from '../common/operations'
import {PRECONDITION_DICT} from '../common/preconditions'
import {DEFAULT_LIST, DEFAULT_MAP} from '../common/constants'

import Splitline from '../Splitline'

const {Option} = Select
const {Group: ButtonGroup} = Button

import './index.less'

function Rule({
  path,

  query,
  preconditions = DEFAULT_LIST,
  operations = OPERATION_LIST,
  fieldsList = DEFAULT_LIST,
  fieldsDict = DEFAULT_MAP,

  onDuplicateRule,
  onDeleteRule,

  onFieldChange,
  onOperationChange,
  onValueChange,
}) {
  const defaultPrecondition = preconditions.size ? preconditions.first() : null
  const defaultField = fieldsList.size ? fieldsList.first() : null
  const defaultOperation = operations.size ? operations.first() : null
  const defaultValue = null

  const precondition =
    query.getIn(['data', 'precondition']) || defaultPrecondition
  const field = query.getIn(['data', 'field']) || null
  const operation = query.getIn(['data', 'operation']) || defaultOperation
  const value = query.getIn(['data', 'value']) || defaultValue

  const fieldOptionalValues =
    fieldsDict && fieldsDict.size
      ? fieldsDict.getIn([field, 'optional_values'])
      : null

  return (
    <div className="Rule">
      <Splitline />
      {preconditions && preconditions.size ? (
        <Select
          onChange={onFieldChange.bind(this, path)}
          className="Rule__Precondition Rule__Item NoMargin"
          value={precondition}
        >
          {preconditions
            .map(preconditionKey => (
              <Option key={preconditionKey} value={preconditionKey}>
                {PRECONDITION_DICT.getIn([preconditionKey, 'description'])}
              </Option>
            ))
            .toJS()}
        </Select>
      ) : null}
      <Select
        onChange={onFieldChange.bind(this, path)}
        className={classNames(
          'Rule__Field',
          'Rule__Item',
          preconditions && preconditions.size ? '' : 'NoMargin'
        )}
        value={field}
      >
        {fieldsList &&
          fieldsList
            .map(field => {
              return (
                <Option key={field} value={field}>
                  {field}
                </Option>
              )
            })
            .toJS()}
      </Select>
      <Select
        className="Rule__Operation Rule__Item"
        value={operation}
        onChange={onOperationChange.bind(this, path)}
      >
        {operations
          .map(operationKey => {
            return (
              <Option key={operationKey} value={operationKey}>
                {OPERATION_DICT.getIn([operationKey, 'description'])}
              </Option>
            )
          })
          .toJS()}
      </Select>
      {fieldOptionalValues && fieldOptionalValues.size ? (
        <Select
          className="Rule__Value Rule__Item"
          value={value}
          onChange={onValueChange.bind(this, path)}
        >
          {fieldOptionalValues
            .map(optionalValue => {
              return (
                <Option key={optionalValue} value={optionalValue}>
                  {optionalValue}
                </Option>
              )
            })
            .toJS()}
        </Select>
      ) : (
        <Input
          className="Rule__Value Rule__Item"
          value={value}
          onChange={onValueChange.bind(this, path)}
        />
      )}

      <ButtonGroup className="Rule__Item">
        <Button icon="copy" onClick={onDuplicateRule.bind(this, path)} />
        <Button
          icon="delete"
          type="danger"
          onClick={onDeleteRule.bind(this, path)}
        />
      </ButtonGroup>
    </div>
  )
}

export default Rule
