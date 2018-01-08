import React from 'react'
import {Button, Icon, Dropdown, Menu, Select} from 'antd'

const {Group: ButtonGroup} = Button
const {Item: MenuItem} = Menu
const {Option} = Select

import './index.less'

function Controller() {
  const relationMenu = (
    <Menu>
      <MenuItem key="and">且</MenuItem>
      <MenuItem key="or">或</MenuItem>
    </Menu>
  )
  const addMenu = (
    <Menu>
      <MenuItem key="rule">规则</MenuItem>
      <MenuItem key="group">规则组</MenuItem>
    </Menu>
  )
  return (
    <div className="controller">
      <ButtonGroup>
        <Button type="primary">且</Button>
        <Button>或</Button>
        <Dropdown overlay={addMenu}>
          <Button>
            <Icon type="plus" />
            <span>添加</span>
            <Icon type="down" />
          </Button>
        </Dropdown>
        <Button icon="delete" type="danger">
          <span>删除</span>
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default Controller
