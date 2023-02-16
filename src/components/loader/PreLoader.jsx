import { useEffect, useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const PreLoader = () => {
  const [preLoaderClass, updatePreLoaderClass] = useState('preloader')

  useEffect(() => {
    setTimeout(() => {
      updatePreLoaderClass('preloader preloader-active')
    }, 3000)
  }, [])

  return (
    <div className={preLoaderClass}>
      <InfinitySpin width='200' color='#ffffff' />
    </div>
  )
}

export { PreLoader }
