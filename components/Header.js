import headerStyles from "../styles/Header.module.css"

import React from 'react'

const Header = () => {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>webDev</span> News
        </h1>
        <p className={headerStyles.description}>
            Keep up to date with the latest webDev News
        </p>
    </div>
  )
}

export default Header