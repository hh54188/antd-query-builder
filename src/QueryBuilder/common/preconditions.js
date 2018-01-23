import {Map, List, fromJS} from 'immutable'

export const PRECONDITION_LIST = new List(['EXCLUDE', 'INCLUDE'])

export const PRECONDITION_DICT = new fromJS({
  INCLUDE: {
    description: '包含',
  },
  EXCLUDE: {
    description: '排除',
  },
})
