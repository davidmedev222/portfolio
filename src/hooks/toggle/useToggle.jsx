import { useState } from 'react'

const useToggle = () => {
  const [toggle, updateToggle] = useState(false)

  const handleOnToggle = () => updateToggle(!toggle)

  return { toggle, handleOnToggle }
}

export { useToggle }
