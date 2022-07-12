import { Fragment } from 'react'
import styles from '../../sass/layout/Contact.module.scss'

const Contact = () => {
  return (
    <Fragment>
      <section className={styles.contact} id="contact">
        <form
          action="mailto:moody.mudiaga@gmail.com"
          className={styles.contact__form}
        >
          <label htmlFor="name" className={styles.contact__label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            className={styles.contact__input}
            placeholder="Name"
            required
          />

          <label htmlFor="mail" className={styles.contact__label}>
            Email
          </label>
          <input
            type="email"
            id="mail"
            className={styles.contact__input}
            placeholder="E-mail"
            required
          />

          <label htmlFor="message" className={styles.contact__label}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="15"
            className={styles.contact__textarea}
            placeholder="Message"
            required
          ></textarea>

          <input
            type="submit"
            value="Submit"
            className={styles.contact__button}
          />
        </form>
      </section>
    </Fragment>
  )
}

export default Contact
