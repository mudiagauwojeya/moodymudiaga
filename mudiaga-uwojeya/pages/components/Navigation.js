import Link from 'next/link'
import Image from 'next/image'
import styles from '../../sass/layout/Navigation.module.scss';

const Navigation = () => {
    return <nav className={styles.navigation}>
			<div className={styles.navigation__brand}>
                <Link href="/" >
                    <a target="_self" className={styles.navigation__home}>
                        <Image
							src="/logo.png"
                            alt="mudi official logo"
                            className={styles.navigation__logo}
						/>
                    </a>
                </Link>
			</div>

			<input type="checkbox" className={styles.navigation__checkbox} id="menu-toggle" />
			<label htmlFor="menu-toggle" className={styles.navigation__button}>
				<span className={styles.navigation__icon}></span>
			</label>
			<div className={styles.navigation__ball}></div>
			<div className={styles.navigation__menu}>
				<ul className={styles.navigation__list}>
					<li className={styles.navigation__item}>
                        <Link href="/" >
						<a target="_self" className={styles.navigation__link}
							>Home</a
						>
                        </Link>
					</li>
					<li className={styles.navigation__item}>
                        <Link href="/project">
						<a
							target="_self"
							className={styles.navigation__link}
							>Projects</a
						>
                        </Link>
					</li>
					<li className={styles.navigation__item}>
                        <Link href="/blog" >
						<a target="_self" className={styles.navigation__link}
							>Blog</a
						>
                        </Link>
					</li>
					<li className={styles.navigation__item}>
                        <Link href="/#contact">
						<a target="_self" className={styles.navigation__link}
							>Contact</a
						>
                        </Link>
					</li>
				</ul>

				<div className={styles.navigation__socials}>
					<span className={styles.navigation__socialText}>Find Me</span>
					<div className={styles.navigation__socialContainer}>
						<a href="#contact" className={styles.navigation__socialLink}>
							<svg className={styles.navigation__socialBrand}>
								<use href="assets/sprite.svg#icon-mail_outline"></use>
							</svg>
						</a>

						<a
							href="https://github.com/uwojeyamudiaga/"
							target="_blank"
							className={styles.navigation__socialLink}
						>
							<svg className={styles.navigation__socialBrand}>
								<use href="assets/sprite.svg#icon-github1"></use>
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/mudiaga-moody-uwojeya/"
							target="_blank"
							className={styles.navigation__socialLink}
						>
							<svg className={styles.navigation__socialBrand}>
								<use href="assets/sprite.svg#icon-linkedin"></use>
							</svg>
						</a>
						<a
							href="https://twitter.com/MoodyMudiaga/"
							target="_blank"
							className={styles.navigation__socialLink}
						>
							<svg className={styles.navigation__socialBrand}>
								<use href="assets/sprite.svg#icon-twitter1"></use>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</nav>
}

export default Navigation;