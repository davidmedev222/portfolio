import { useContext } from 'react';
import { IconsSocial } from '../../components/icons/IconsSocial';
import { GlobalContext } from '../../context/global/GlobalContext';

const Contact = () => {
  const { contact } = useContext(GlobalContext);

  return (
    <section id="contact" className="contact">
      {/* TITLE */}
      <h3 className="contact-title">
        <span className="contact-span">{contact.span}</span>
        {contact.title}
      </h3>
      {/* COMPONENT */}
      <IconsSocial />
    </section>
  );
};

export { Contact };
