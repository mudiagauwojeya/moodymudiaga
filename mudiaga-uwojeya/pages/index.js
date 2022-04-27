import Head from 'next/head'
import { Fragment } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import  styles from '../sass/component/Index.module.sass';
import Contact from './components/Contact';

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

		<Contact />

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