import React from 'react'

function Foo() {
  // - If possible, prefer as specific as possible. For example, HTMLDivElement
  //   is better than HTMLElement and way better than Element.
  // - Technical-wise, this returns RefObject<HTMLDivElement>
  const divRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  // const inputRef = useRef<HTMLDivElement>(null)
  const selectRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    // Note that ref.current may be null. This is expected, because you may
    // conditionally render the ref-ed element, or you may forgot to assign it
    if (!divRef.current) throw Error('divRef is not assigned')

    // Now divRef.current is sure to be HTMLDivElement
    doSomethingWith(divRef.current)
  })

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('e: ', e)
  }

  // Give the ref to an element so React can manage it for you
  return (
    <div ref={divRef}>
      etc
      <input type='text' ref={inputRef} />
      <select ref={selectRef} onChange={onChange} />
    </div>
  )
}

function FooIntervalRef() {
  // Technical-wise, this returns MutableRefObject<number | null>
  // const intervalRef = useRef<number | null>(null)
  const intervalRef = useRef<number | undefined>(undefined)

  // You manage the ref yourself (that's why it's called MutableRefObject!)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log(1)
    }, 2000)
    return () => clearInterval(intervalRef.current)
  }, [])

  // The ref is not passed to any element's "ref" prop
  return <button onClick={/* clearInterval the ref */}>Cancel timer</button>
}

import { useLoading } from './hooks'
// console.log('useLoading: ', useLoading)
useLoading()
