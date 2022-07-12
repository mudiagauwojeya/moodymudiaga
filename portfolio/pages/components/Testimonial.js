import { Fragment } from 'react'
import styles from '../../sass/layout/Testimonial.module.scss'

const Testimonial = () => {
  return (
    <Fragment>
      <section className={styles.testimonial}>
        <div className={styles.testimonial__container}>
          <div className={styles.testimonial__customer}>
            <div className={styles.testimonial__info}>
              <svg className={styles.testimonial__icon}>
                <use href="/sprite.svg#icon-account_circle"></use>
              </svg>
              <div className={styles.testimonial__profile}>
                <h4 className={styles.headingTertiary}>Augustine Edward</h4>
                <p className={styles.testimonial__description}>
                  CEO - 360 Whiteboard
                </p>
              </div>
            </div>
            <p className={styles.testimonial__review}>
              Moody is very passionate and all about adding value to what he
              does. I will never tire to use his services. To anyone wondering
              whether or not they should hire Moody, you're in good hands.
            </p>
          </div>

          <div
            className={[
              styles.testimonial__customer,
              styles.testimonial__customer1,
            ]}
          >
            <div
              className={[styles.testimonial__info, styles.testimonial__info1]}
            >
              <svg className={styles.testimonial__icon}>
                <use href="/sprite.svg#icon-account_circle"></use>
              </svg>
              <div
                className={[
                  styles.testimonial__profile,
                  styles.testimonial__profile1,
                ]}
              >
                <h4 className={styles.headingTertiary}>Naomi Fresh</h4>
                <p className={styles.testimonial__description}>
                  Solopreneur - Muna fashion
                </p>
              </div>
            </div>
            <p className={styles.testimonial__review}>
              Moody makes sure his work is industry standard and satisfactory to
              his client. I can tell by the efforts he poured into my project.
              My website is faster than before, and is converting more than
              before I met Moody.
            </p>
          </div>

          <div className={styles.testimonial__customer}>
            <div className={styles.testimonial__info}>
              <svg className={styles.testimonial__icon}>
                <use href="/sprite.svg#icon-account_circle"></use>
              </svg>
              <div className={styles.testimonial__profile}>
                <h4 className={styles.headingTertiary}>
                  Stewart O. Egedegbe Esq
                </h4>
                <p className={styles.testimonial__description}>
                  Principal Partner - S. O. Egedegbe & Co.
                </p>
              </div>
            </div>
            <p className={styles.testimonial__review}>
              From the design, the performance, and my personal experience using
              the website Moody designed for us I am very satisfied with the
              overall result of our project. It was beyond our expectations.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Testimonial
