import React from 'react'
import './DropDown.css'
import Links from '../links'

import cx from "classnames";

interface Props {
  dropdownActive: Boolean
  items: string[]
}

const DropDown:React.FC<Props> = ({ dropdownActive, items }) => {

  const dropdownClasses = cx(
    "dropdown",
    dropdownActive && "dropdown__active"
  );

  return (
    <div className={dropdownClasses}    >
      <Links links={items} />
    </div>
  )
}

export default DropDown