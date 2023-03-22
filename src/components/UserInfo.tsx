import React from 'react'
import './UserInfo.css'

function UserInfo({ user }) {

  return (
    <div data-id={user.id} className='user'>
      {/* TODO sup标签默认样式带定位top */}
      {/* <sup className='id'>{user.id}</sup> */}
      <div className='id'>{user.id}</div>
      <h3>{user.name}</h3>
      <em>{user.description}</em>
    </div>
  )
}

export default UserInfo