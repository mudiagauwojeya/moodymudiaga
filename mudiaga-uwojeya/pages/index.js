import Head from 'next/head'
import { Fragment } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import  styles from '../sass/component/Index.module.sass';

const Index = () => {
    return <Fragment>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Mudiaga Moody" />
            <meta name="description" content="My portfolio website" />
            <meta
                name="keywords"
                content="full stack developer, front end developer
        back end developer, wewb developer, web development, web design, portfolio website,
        website design, web designer, website developer, website, web apps, web application Mudiaga Moody Uwojeya Nigeria"
            />
            <title>Mudiaga Moody Uwojeya</title>

            <link
                rel="shortcut icon"
                href="/mudi-favicon-sm.png"
                type="image/x-icon"
            />
           
        </Head>

       <div className={styles.container}>
		<Navigation />
		
		<Hero />

		<Features />

		<Testimonial />

		

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

		<footer className="footer">
			<ul className="footer__list">
				<li className="footer__item">
					<a href="index.html" target="_self" className="footer__link">Home</a>
				</li>
				<li className="footer__item">
					<a href="projects.html" target="_self" className="footer__link"
						>Projects</a
					>
				</li>
				<li className="footer__item">
					<a href="blog.html" target="_self" className="footer__link">Blog</a>
				</li>
				<li className="footer__item">
					<a href="#contact" target="_self" className="footer__link"
						>Contact</a
					>
				</li>
			</ul>
			<ul className="footer__list">
				<li className="footer__attribution">
					SVG icons from
					<a href="https://icomoon.io/" className="footer__link">IcoMoon</a>
				</li>
				<li className="footer__attribution">
					Cover video from
					<a href="https://coverr.co/" className="footer__link">Coverr</a>
				</li>
			</ul>
			<div className="footer__copyright">
				All rights reserved! Mudiaga Moody Uwojeya &copy; 2020
			</div>
		</footer>
	</div>
    </Fragment>
}

export default Index;