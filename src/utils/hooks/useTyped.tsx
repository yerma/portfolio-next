import { useEffect, useRef } from "react"
import Typed from "typed.js"

const useTyped = (elRef, opts = {}) => {
  const typed = useRef(null)

  useEffect(() => {
    const options = {
      typeSpeed: 80,
      cursorChar: '_',
      loop: true,
      loopCount: Infinity,
      backSpeed: 10,
      ...opts
    }
    typed.current = new Typed(elRef.current, options)

    return () => {
      typed.current.destroy()
    }
  })

  return { ...typed.current }
}

export default useTyped
