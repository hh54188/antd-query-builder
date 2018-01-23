import React from 'react'
import {Button, Icon, Dropdown, Menu} from 'antd'

const {Group: ButtonGroup} = Button
const {Item: MenuItem} = Menu

import RELATIONS from '../common/relations'

import './index.less'

function Controller({
  path,

  relation,
  disableDeleteGroup,
  disableGroup,

  onAddGroup,
  onAddRule,
  onDeleteGroup,
  onChangeRelation,
}) {
  return (
    <div className="controller">
      <ButtonGroup>
        <Button
          onClick={onChangeRelation.bind(this, path, RELATIONS.AND)}
          type={relation === RELATIONS.AND ? 'primary' : ''}
        >
          且
        </Button>
        <Button
          onClick={onChangeRelation.bind(this, path, RELATIONS.OR)}
          type={relation === RELATIONS.OR ? 'primary' : ''}
        >
          或
        </Button>
        <Dropdown
          overlay={
            <Menu>
              <MenuItem key="rule">
                <span
                  className="TypeLabel"
                  onClick={onAddRule.bind(this, path)}
                >
                  规则
                </span>
              </MenuItem>
              {!disableGroup && (
                <MenuItem key="group">
                  <span
                    className="TypeLabel"
                    onClick={onAddGroup.bind(this, path)}
                  >
                    规则组
                  </span>
                </MenuItem>
              )}
            </Menu>
          }
        >
          <Button>
            <Icon type="plus" />
            <span>添加</span>
            <Icon type="down" />
          </Button>
        </Dropdown>
        {!disableDeleteGroup ? (
          <Button
            onClick={onDeleteGroup.bind(this, path)}
            icon="delete"
            type="danger"
          >
            <span>删除组</span>
          </Button>
        ) : null}
      </ButtonGroup>
    </div>
  )
}

export default Controller
