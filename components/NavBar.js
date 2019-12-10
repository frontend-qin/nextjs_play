import React, { useState, useEffect } from 'react'
import { Menu, Icon } from 'antd'
import Link from 'next/link'

export default () => {
  const [menu, setMenu] = useState('/home')
  const handleClick = e => {
    setMenu(e.key)
  }
  return (
    <Menu mode='horizontal' selectedKeys={menu} onClick={handleClick}>
      <Menu.Item key='/home'>
        <Link href='/home'>
          <a>
            <Icon type='home' />
            首页
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key='/about'>
        <Link href='/about'>
          <a>
            <Icon type='heart' theme='twoTone' />
            沸点
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  )
}
