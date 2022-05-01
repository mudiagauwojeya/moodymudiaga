import { Fragment } from 'react'
import styles from '../../sass/layout/Footer.module.scss'

const Footer = () => {
  return <Fragment>

    <footer className={styles.footer}>
			<ul className={styles.footer__list}>
				<li className={styles.footer__item}>
					<a href="index.html" target="_self" className={styles.footer__link}>Home</a>
				</li>
				<li className={styles.footer__item}>
					<a href="projects.html" target="_self" className={styles.footer__link}
						>Projects</a
					>
				</li>
				<li className={styles.footer__item}>
					<a href="blog.html" target="_self" className={styles.footer__link}>Blog</a>
				</li>
				<li className={styles.footer__item}>
					<a href="#contact" target="_self" className={styles.footer__link}
						>Contact</a
					>
				</li>
			</ul>
			<ul className={styles.footer__list}>
				<li className={styles.footer__attribution}>
					SVG icons from
					<a href="https://icomoon.io/" className={styles.footer__link}>IcoMoon</a>
				</li>
				<li className={styles.footer__attribution}>
					Cover video from
					<a href="https://coverr.co/" className={styles.footer__link}>Coverr</a>
				</li>
			</ul>
			<div className={styles.footer__copyright}>
				All rights reserved! Mudiaga Moody Uwojeya &copy; 2020-2022
			</div>
		</footer>
  
  </Fragment>
}

export default Footer;