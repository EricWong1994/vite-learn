import {useRef, useEffect} from 'react'

export const useRowChanged = ({ index,setRowHeight }) => {
  const rowRef = useRef({})
  useEffect(() => {
    if(rowRef.current) {
      setRowHeight(index, rowRef.current.clientHeight)
    }
  }, [rowRef])

  return {
    rowRef
  }
}