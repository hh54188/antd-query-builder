import React from 'react'
import {Button, Icon, Dropdown, Menu} from 'antd'

import './index.less'

const {Group: ButtonGroup} = Button
const {Item: MenuItem} = Menu

function Controller() {
  const menu = (
    <Menu>
      <MenuItem key="1">规则</MenuItem>
      <MenuItem key="2">小组</MenuItem>
    </Menu>
  )

  return (
    <div>
      <ButtonGroup size="small">
        <Button type="primary">且</Button>
        <Button>或</Button>
        <Dropdown overlay={menu}>
          <Button>
            <Icon type="plus" />
            <span>添加</span>
            <Icon type="down" />
          </Button>
        </Dropdown>
        <Button type="danger">
          <Icon type="close" />
          <span>删除</span>
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default Controller
