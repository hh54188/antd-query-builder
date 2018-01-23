import React from 'react'
import 'antd/dist/antd.css'
import * as _ from 'lodash'

import {DEFAULT_LIST, DEFAULT_FUNCTION, DEFAULT_MAP} from './common/constants'
import {OPERATION_LIST} from './common/operations'

import {GroupRecord} from './common/modals/Group'
import {RuleRecord} from './common/modals/Rule'

import Group from './Group'
import Rule from './Rule'

class QueryBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: this.props.query || new GroupRecord(),
    }
    // “组”相关
    this.onAddGroup = this.onAddGroup.bind(this)
    this.onAddRule = this.onAddRule.bind(this)
    this.onDeleteGroup = this.onDeleteGroup.bind(this)
    this.onChangeRelation = this.onChangeRelation.bind(this)
    // “规则”相关
    this.onDeleteRule = this.onDeleteRule.bind(this)
    this.onDuplicateRule = this.onDuplicateRule.bind(this)
    this.onFieldChange = this.onFieldChange.bind(this)
    this.onOperationChange = this.onOperationChange.bind(this)
    this.onValueChange = this.onValueChange.bind(this)

    this.submit = this.submit.bind(this)
  }
  submit() {
    const {onChange = DEFAULT_FUNCTION} = this.props
    const {query} = this.state
    onChange(query.toJS())
  }
  onAddGroup(path) {
    const {query} = this.state
    let targetGroup = query.getIn(path)
    const targetGroupData = targetGroup.get('data')
    targetGroup = targetGroup.set(
      'data',
      targetGroupData.push(new GroupRecord())
    )

    this.setState(
      {
        query: query.setIn(path, targetGroup),
      },
      () => {
        this.submit()
      }
    )
  }
  onAddRule(path) {
    const {query} = this.state
    let targetGroup = query.getIn(path)
    const targetGroupData = targetGroup.get('data')
    targetGroup = targetGroup.set(
      'data',
      targetGroupData.push(new RuleRecord())
    )

    this.setState(
      {
        query: query.setIn(path, targetGroup),
      },
      () => {
        this.submit()
      }
    )
  }
  onDeleteGroup(path) {
    const {query} = this.state
    this.setState(
      {
        query: query.deleteIn(path),
      },
      () => {
        this.submit()
      }
    )
  }
  onChangeRelation(path, relation) {
    const {query} = this.state
    this.setState(
      {
        query: query.setIn(path.concat(['relation']), relation),
      },
      () => {
        this.submit()
      }
    )
  }
  onDeleteRule(path) {
    let {query} = this.state
    query = query.deleteIn(path)
    // TODO:
    // 当某个 Group 的 data 中的 rules 被清空时
    // 该 Group 也应该被删除
    this.setState({
      query,
    })
  }
  onDuplicateRule(path) {
    const parentPath = path.slice()
    parentPath.splice(path.length - 1, 1)
    const {query} = this.state
    this.setState(
      {
        query: query.setIn(
          parentPath,
          query.getIn(parentPath).push(query.getIn(path))
        ),
      },
      () => {
        this.submit()
      }
    )
  }
  onFieldChange(path, value) {
    const {fieldSelectCallback = DEFAULT_FUNCTION} = this.props
    const {query} = this.state
    fieldSelectCallback(value)
    // 当 field 发生更改时
    // 该 rule 的 value 需要重制
    this.setState(
      {
        query: query.withMutations(state => {
          state
            .setIn(path.concat(['data', 'field']), value)
            .setIn(path.concat(['data', 'value']), null)
        }),
      },
      () => {
        this.submit()
      }
    )
  }
  onOperationChange(path, value) {
    const {query} = this.state
    this.setState(
      {
        query: query.setIn(path.concat(['data', 'operation']), value),
      },
      () => {
        this.submit()
      }
    )
  }
  onValueChange(path, event) {
    const value = _.isObject(event) ? event.target.value : event
    const {query} = this.state
    this.setState(
      {
        query: query.setIn(path.concat(['data', 'value']), value),
      },
      () => {
        this.submit()
      }
    )
  }
  render() {
    const {
      disableGroup,
      preconditions,
      operations,
      fieldsList,
      fieldsDict,
    } = this.props
    const {query} = this.state
    return (
      <Group
        path={[]}
        query={query}
        disableGroup={disableGroup}
        preconditions={preconditions}
        operations={operations}
        fieldsList={fieldsList}
        fieldsDict={fieldsDict}
        onAddGroup={this.onAddGroup}
        onAddRule={this.onAddRule}
        onDeleteGroup={this.onDeleteGroup}
        onChangeRelation={this.onChangeRelation}
        onDeleteRule={this.onDeleteRule}
        onDuplicateRule={this.onDuplicateRule}
        onFieldChange={this.onFieldChange}
        onOperationChange={this.onOperationChange}
        onValueChange={this.onValueChange}
      />
    )
  }
}

QueryBuilder.defaultProps = {
  // Props:
  data: DEFAULT_MAP, // 实际数据

  fieldsList: DEFAULT_LIST, //
  fieldsDict: DEFAULT_MAP, // field 相关信息，比如 optional_values
  disableGroup: false, // 是否允许添加组, 默认允许添加组
  preconditions: DEFAULT_LIST, // 前置条件：排除／包含，默认不提供前置条件
  operations: OPERATION_LIST, // 允许的操作符, 默认全部启用
  // Callbacks:
  fieldSelectCallback: DEFAULT_FUNCTION, // 选择完某个字段后的回调函数，用于异步加载可选值数据
}

export default QueryBuilder
