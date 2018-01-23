import {Record, List} from 'immutable'

export const GroupRecord = new Record({
  type: 'group',
  relation: 'AND',
  data: new List(),
})
