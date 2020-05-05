import {useState, useEffect} from 'react'

import './useFade.css'

export default function useFade() {
  const [show, setShow] = useState('hide')

  useEffect(() => {
    setShow('show')
    return () => {
      setShow('hide')
    }
  }, [])

  return {show}
}
