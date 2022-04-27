import { Fragment } from "react";

const Contact = () => {
    return <Fragment>
        <section className="contact" id="contact">
			<form action="mailto:moody.mudiaga@gmail.com" className="contact__form">
				<label htmlFor="#name" className="contact__label">Name</label>
				<input
					type="text"
					id="name"
					className="contact__input"
					placeholder="Name"
					required
				/>

				<label htmlFor="#mail" className="contact__label">Email</label>
				<input
					type="email"
					id="mail"
					className="contact__input"
					placeholder="E-mail"
					required
				/>

				<label htmlFor="#message" className="contact__label">Message</label>
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="15"
					className="contact__textarea"
					placeholder="Message"
					required
				></textarea>

				<input type="submit" value="Submit" className="contact__button" />
			</form>
		</section>
    </Fragment>
}

export default Contact;