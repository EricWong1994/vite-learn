import React from 'react'
import ComponentProps from './ComponentProps'

export default function TSIndex() {
  const obj2 = {
    name: 'Eric',
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e: ', e)
  }
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e)
  }

  const childrenElement = () => <div>哈哈哈哈</div>
  return (
    <div>
      TSIndex
      <ComponentProps
        names={['hello']}
        status='success'
        obj={{ id: 'sdfdsjf', title: 'sdfsdf' }}
        objArr={[{ id: 'dsfsdf', title: 'sdfsdfq' }]}
        obj2={obj2}
        onChange={onChange}
        onClick={onClick}
        childrenElement={childrenElement()}
      >
        <div>
          <h1>水电费水电费水电费</h1>
        </div>
      </ComponentProps>
    </div>
  )
}
