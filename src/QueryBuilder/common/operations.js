import {Map, List, fromJS} from 'immutable'

export const OPERATION_LIST = new List([
  'EQUAL',
  'EQUAL_MUPTIPLE',
  'GREATER',
  'LESS',
  'GREATER_EQUAL',
  'LESS_EQUAL',
  'NOT_EQUAL',
  'IN',
  'OUT',
  'BEGIN_WITH',
  'END_WITH',
  'REG',
])

export const OPERATION_DICT = new fromJS({
  EQUAL: {
    description: '等于',
  },
  NOT_EQUAL: {
    description: '不等于',
  },
  EQUAL_MUPTIPLE: {
    description: '等于多个',
  },
  GREATER: {
    description: '大于',
  },
  GREATER_EQUAL: {
    description: '大于等于',
  },
  LESS: {
    description: '小于',
  },
  LESS_EQUAL: {
    description: '小于等于',
  },
  IN: {
    description: '属于',
  },
  OUT: {
    description: '不属于',
  },
  BEGIN_WITH: {
    description: '开头为',
  },
  END_WITH: {
    description: '结尾为',
  },
  REG: {
    description: '正则表达式',
  },
})
