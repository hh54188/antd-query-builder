import {Record} from 'immutable'

export const DataRecord = new Record({
  precondition: '',
  field: '',
  operation: '',
  value: '',
})

export const RuleRecord = new Record({
  type: 'rule',
  data: new DataRecord(),
})
