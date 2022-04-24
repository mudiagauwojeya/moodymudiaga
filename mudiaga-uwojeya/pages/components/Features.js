import { Fragment } from "react";
import styles from '../../sass/layout/Features.module.sass';

const Features = () => {

    return <Fragment>
        <section className={styles.feature}>
			<div className={styles.feature__features1}>
				<div className={styles.feature__shape}>
					<svg className={styles.feature__item}>
						<use href="assets/sprite.svg#icon-public"></use>
					</svg>

					<svg className={styles.feature__item1}>
						<use href="assets/sprite.svg#icon-where_to_vote"></use>
					</svg>
				</div>
				<div className={styles.feature__description}>
					<h3 className="heading-secondary">
						<abbr title="Search Engine Optimization">seo</abbr>
					</h3>
					<p className={styles.feature__highlight}>
						boost your online presence by ranking top in search results to
						get more leads, sales, and save on ads
					</p>
				</div>
			</div>

			<div className={styles.feature__features2}>
				<div className={styles.feature__shape}>
					<svg className={styles.feature__item}>
						<use href="assets/sprite.svg#icon-bolt"></use>
					</svg>
				</div>
				<div className={styles.feature__description}>
					<h3 className="heading-secondary">speed</h3>
					<p className={styles.feature__highlight}>
						because nobody waits for a slow website, a fast performing
						website increases conversion
					</p>
				</div>
			</div>

			<div className={styles.feature__features3}>
				<div className={styles.feature__shape}>
					<svg className={styles.feature__item}>
						<use href="assets/sprite.svg#icon-laptop_windows"></use>
					</svg>
					<svg className={styles.feature__item2}>
						<use href="assets/sprite.svg#icon-tablet"></use>
					</svg>
					<svg className={styles.feature__item3}>
						<use href="assets/sprite.svg#icon-phone_android"></use>
					</svg>
				</div>
				<div className={styles.feature__description}>
					<h3 className="heading-secondary">
						<abbr title="Responsive Web Design">rwd</abbr>
					</h3>
					<p className={styles.feature__highlight}>
						responsive design to include the billions of customers
						now accessing the internet on mobile devices
					</p>
				</div>
			</div>

			<div className={styles.feature__features4}>
				<div className={styles.feature__shape}>
					<svg className={styles.feature__item}>
						<use href="assets/sprite.svg#icon-accessible"></use>
					</svg>
				</div>
				<div className={styles.feature__description}>
					<h3 className="heading-secondary">
						<abbr title="Accessibility">a11y</abbr>
					</h3>
					<p className={styles.feature__highlight}>
						make your website accessible to all kinds of
						visitors, including those using assistive technology
					</p>
				</div>
			</div>
		</section>
    </Fragment>    
}

export default Features;