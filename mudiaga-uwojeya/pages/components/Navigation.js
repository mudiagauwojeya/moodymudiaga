import { Fragment } from "react"

const Navigation = () => {
    return <>
        <nav className="navigation">
			// brand section
			<div className="navigation__brand">
				<a href="index.html" target="_self" className="navigation__home">
					<img
						src="assets/logo.png"
						alt="mudi logo"
						className="navigation__logo"
					/>
				</a>
			</div>

			<input type="checkbox" className="navigation__checkbox" id="menu-toggle" />
			<label htmlFor="menu-toggle" className="navigation__button">
				<span className="navigation__icon"></span>
			</label>
			<div className="navigation__ball"></div>
			<div className="navigation__menu">
				<ul className="navigation__list">
					<li className="navigation__item">
						<a href="index.html" target="_self" className="navigation__link"
							>Home</a
						>
					</li>
					<li className="navigation__item">
						<a
							href="projects.html"
							target="_self"
							className="navigation__link"
							>Projects</a
						>
					</li>
					<li className="navigation__item">
						<a href="blog.html" target="_self" className="navigation__link"
							>Blog</a
						>
					</li>
					<li className="navigation__item">
						<a href="#contact" target="_self" className="navigation__link"
							>Contact</a
						>
					</li>
				</ul>

				<div className="navigation__socials">
					<span className="navigation__social-text">Find Me</span>
					<div className="navigation__social-container">
						<a href="#contact" className="navigation__social-link">
							<svg className="navigation__social-brand">
								<use href="assets/sprite.svg#icon-mail_outline"></use>
							</svg>
						</a>

						<a
							href="https://github.com/uwojeyamudiaga/"
							target="_blank"
							className="navigation__social-link"
						>
							<svg className="navigation__social-brand">
								<use href="assets/sprite.svg#icon-github1"></use>
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/mudiaga-moody-uwojeya/"
							target="_blank"
							className="navigation__social-link"
						>
							<svg className="navigation__social-brand">
								<use href="assets/sprite.svg#icon-linkedin"></use>
							</svg>
						</a>
						<a
							href="https://twitter.com/MoodyMudiaga/"
							target="_blank"
							className="navigation__social-link"
						>
							<svg className="navigation__social-brand">
								<use href="assets/sprite.svg#icon-twitter1"></use>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</nav>
    </>
}

export default Navigation;