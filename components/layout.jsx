import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Fred'
export const siteTitle = 'Next.js Sample Website' 

const Layout = ({children, home}) => {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="favicon" href="/favicon.ico" />
                <meta 
                    name="description" 
                    content="Learn how to build a personal website using Next.js"/>
                <meta 
                    name="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Layout
