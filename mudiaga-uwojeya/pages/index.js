import Head from 'next/head'
import { Fragment } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import  styles from '../sass/component/Index.module.scss';
import Footer from './components/Footer';

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

		<Footer />
	</div>
    </Fragment>
}

export default Index;