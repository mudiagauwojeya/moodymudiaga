import Head from 'next/head'
import { Fragment } from 'react';

const Index = () => {
    return <Fragment>
        <Head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Mudiaga Moody" />
            <meta name="description" content="My portfolio website" />
            <meta
                name="keywords"
                content="full stack developer, front end developer
        back end developer, wewb developer, web development, web design, portfolio website,
        website design, web designer, website developer, website, web apps, web application Mudiaga Moody Uwojeya Nigeria"
            />
            <title>Mudiaga Moody</title>

            <link
                href="https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;600&family=Petrona:wght@500;700&family=Quicksand:wght@300&display=swap"
                rel="stylesheet"
            />

            /*  external stylesheet and favicon */
            <link
                rel="shortcut icon"
                href="assets/mudi-favicon-sm.png"
                type="image/x-icon"
            />
           
        </Head>
        <h1>Hello World</h1>
    </Fragment>
}

export default Index;