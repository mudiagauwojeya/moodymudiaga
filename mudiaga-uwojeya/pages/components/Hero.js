import { Fragment } from "react";

const Hero = () => {

    return <Fragment>
        <header className="header">
			<div className="header__bg-video">
				<video className="header__video" autoPlay muted loop>
					<source src="assets/laptop.mp4" type="video/mp4" />
					Your current browser does not support video, please upgrade your
					browser.
				</video>
			</div>
			<div className="header__content">
				<h1 className="heading-primary">Grow your business</h1>
				<p className="header__paragraph">
					get seen by the people looking for your products or services on
					the internet, drive them to your website and convert them. It is
					as simple as ...
				</p>
				<svg className="header__chevron">
					<use href="assets/sprite.svg#icon-keyboard_arrow_down"></use>
				</svg>
			</div>
		</header>
    </Fragment>
}

export default Hero;