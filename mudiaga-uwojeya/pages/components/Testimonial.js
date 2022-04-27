import { Fragment } from "react";

const Testimonial = () => {
    return <Fragment>
        <section className="testimonial">
			<div className="testimonial__container">
				<div className="testimonial__customer">
					<div className="testimonial__info">
						<svg className="testimonial__icon">
							<use href="assets/sprite.svg#icon-account_circle"></use>
						</svg>
						<div className="testimonial__profile">
							<h4 className="heading-tertiary">Augustine Edward</h4>
							<p className="testimonial__description">
								CEO - 360 Whiteboard
							</p>
						</div>
					</div>
					<p className="testimonial__review">
						Moody is very passionate and all about adding value to what he
						does. I will never tire to use his services. To anyone
						wondering whether or not they should hire Moody, you're in
						good hands.
					</p>
				</div>

				<div className="testimonial__customer testimonial__customer--1">
					<div className="testimonial__info testimonial__info--1">
						<svg className="testimonial__icon">
							<use href="assets/sprite.svg#icon-account_circle"></use>
						</svg>
						<div className="testimonial__profile testimonial__profile--1">
							<h4 className="heading-tertiary">Naomi Fresh</h4>
							<p className="testimonial__description">
								Solopreneur - Muna fashion
							</p>
						</div>
					</div>
					<p className="testimonial__review">
						Moody makes sure his work is industry standard and
						satisfactory to his client. I can tell by the efforts he
						poured into my project. My website is faster than before, and
						is converting more than before I met Moody.
					</p>
				</div>

				<div className="testimonial__customer">
					<div className="testimonial__info">
						<svg className="testimonial__icon">
							<use href="assets/sprite.svg#icon-account_circle"></use>
						</svg>
						<div className="testimonial__profile">
							<h4 className="heading-tertiary">Stewart O. Egedegbe Esq</h4>
							<p className="testimonial__description">
								Principal Partner - S. O. Egedegbe & Co.
							</p>
						</div>
					</div>
					<p className="testimonial__review">
						From the design, the performance, and my personal experience
						using the website Moody designed for us I am very satisfied
						with the overall result of our project. It was beyond our
						expectations.
					</p>
				</div>
			</div>
		</section>
    </Fragment>
}

export default Testimonial;