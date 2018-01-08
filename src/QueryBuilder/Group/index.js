import React from 'react'

import Controller from '../Controller'
import Rule from '../Rule'

import './index.less'

function Group() {
  return (
    <div className="Group">
      <div className="Group__Controller">
        <Controller />
      </div>
      <div className="Group__Rules">
        <Rule />
        <Rule />
        <Rule />
        <div className="Group">
          <div className="Group__Controller">
            <Controller />
          </div>
          <div className="Group__Rules">
            <Rule />
            <Rule />
            <Rule />
            <div className="Group">
              <div className="Group__Controller">
                <Controller />
              </div>
              <div className="Group__Rules">
                <Rule />
                <Rule />
                <Rule />
              </div>
            </div>
          </div>
        </div>
        <div className="Group">
          <div className="Group__Controller">
            <Controller />
          </div>
          <div className="Group__Rules">
            <Rule />
            <Rule />
            <Rule />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Group
