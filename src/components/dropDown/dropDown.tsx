import React, { useState, useCallback } from 'react'
import './style.css'

const CustomDropDown = ((props:any) => {

  const {children} = props
  const [isDropOpen, setIsDropOpen] = useState(false)
  const [dropDownClassName, setDropDownClassName] = useState('dropdown-content')

  const toggleDropContent = useCallback(() => {
    if (isDropOpen) {
      setDropDownClassName('dropdown-content')
      setIsDropOpen(false)
    } else {
      setDropDownClassName('dropdown-content show')
      setIsDropOpen(true)
    }
  }, [isDropOpen])

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropContent}>Dropdown</button>
      <div id="myDropdown" className={dropDownClassName}>
        {children}
      </div>
    </div>
  )
})


export default CustomDropDown