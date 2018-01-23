import React from 'react'

import Controller from '../Controller'
import Rule from '../Rule'
import Guideline from '../Guideline'
import Splitline from '../Splitline'

import './index.less'

function Group({
  path,

  query,
  disableSplitline,
  disableGroup,
  preconditions,
  operations,
  fieldsList,
  fieldsDict,

  onAddGroup,
  onAddRule,
  onDeleteGroup,
  onChangeRelation,

  onDuplicateRule,
  onDeleteRule,

  onFieldChange,
  onOperationChange,
  onValueChange,
}) {
  const relation = query.get('relation')
  const data = query.get('data')
  const isRootGroup = !path.length

  return (
    <div className="Group">
      <div className="Group__Controller">
        {!isRootGroup && <Splitline />}
        <Controller
          path={path}
          disableDeleteGroup={isRootGroup}
          relation={relation}
          disableGroup={disableGroup}
          onAddGroup={onAddGroup}
          onAddRule={onAddRule}
          onDeleteGroup={onDeleteGroup}
          onChangeRelation={onChangeRelation}
        />
      </div>
      <div className="Group__Rules">
        <Guideline />
        {data.map((item, index) => {
          const type = item.get('type')
          if (type === 'rule') {
            return (
              <Rule
                path={path.concat(['data', index])}
                query={item}
                key={index}
                preconditions={preconditions}
                operations={operations}
                fieldsList={fieldsList}
                fieldsDict={fieldsDict}
                onDuplicateRule={onDuplicateRule}
                onFieldChange={onFieldChange}
                onOperationChange={onOperationChange}
                onValueChange={onValueChange}
                onDeleteRule={onDeleteRule}
              />
            )
          } else if (type === 'group') {
            return (
              <Group
                path={path.concat(['data', index])}
                key={index}
                disableGroup={disableGroup}
                preconditions={preconditions}
                operations={operations}
                fieldsList={fieldsList}
                fieldsDict={fieldsDict}
                query={item}
                onAddGroup={onAddGroup}
                onAddRule={onAddRule}
                onDeleteGroup={onDeleteGroup}
                onChangeRelation={onChangeRelation}
                onDuplicateRule={onDuplicateRule}
                onFieldChange={onFieldChange}
                onOperationChange={onOperationChange}
                onValueChange={onValueChange}
                onDeleteRule={onDeleteRule}
              />
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default Group
