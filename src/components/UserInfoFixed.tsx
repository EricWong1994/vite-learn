import React from 'react'
import './UserInfoFixed.css'

function UserInfo({ user }) {

  return (
    <div data-id={user.id} className='user'>
      {/* TODO sup标签默认样式带定位top */}
      {/* <sup className='id'>{user.id}</sup> */}
      {/* <div className='id'>{user.id}</div>
      <h3>{user.name}</h3>
      <em>{user.email}</em> */}
      <img src={user.cover} alt="" />
    </div>
  )
}

export default UserInfo