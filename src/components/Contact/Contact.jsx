import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contato" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Gostaria de trabalhar comigo? Incrivel!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href="https://api.whatsapp.com/send?phone=5562985880027"
            >
              {btn || 'Vamos conversar!'}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
