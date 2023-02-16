import { useContext } from 'react'
import { IconsSocial } from '../../components/icons/IconsSocial'
import { GlobalContext } from '../../context/global/GlobalContext'

const Contact = () => {
  const { contact } = useContext(GlobalContext)

  const { span, title } = contact

  return (
    <section id='contact' className='contact'>
      {/* TITLE */}
      <h3 className='contact-title'>
        <span className='contact-span'>{span}</span>
        {title}
      </h3>
      {/* COMPONENT */}
      <IconsSocial />
    </section>
  )
}

export { Contact }
