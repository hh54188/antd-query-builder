import React from 'react'

import Controller from '../Controller'
import Rule from '../Rule'
import Guideline from '../Guideline'
import Splitline from '../Splitline'

import './index.less'

function Group() {
  return (
    <div className="Group">
      <div className="Group__Controller">
        <Controller />
      </div>
      <div className="Group__Rules">
        <Guideline />
        <Rule />
        <Rule />
        <Rule />
        <div className="Group">
          <div className="Group__Controller">
            <Splitline />
            <Controller />
          </div>
          <div className="Group__Rules">
            <Guideline />
            <Rule />
            <Rule />
            <Rule />
            <div className="Group">
              <div className="Group__Controller">
                <Splitline />

                <Controller />
              </div>
              <div className="Group__Rules">
                <Guideline />
                <Rule />
                <Rule />
                <Rule />
              </div>
            </div>
          </div>
        </div>
        <div className="Group">
          <div className="Group__Controller">
            <Splitline />

            <Controller />
          </div>
          <div className="Group__Rules">
            <Guideline />
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
