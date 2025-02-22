import Weather from './components/home/Weather'
import Alerts from './components/home/Alerts/Alerts'
import News from './components/home/News/News'
import TwitterFeed from './components/home/twitterFeed'
import styles from '../styles/home.module.scss'
import { Metadata } from 'next'

import '../styles/globals.scss'

export default async function Home() {

  return (
    <main>
        <div className={styles.mw}>
          {/* @ts-expect-error Async Server Component */}
          <Alerts />
          {/* @ts-expect-error Async Server Component */}
          <Weather />
          {/* @ts-expect-error Async Server Component */}
          <News />
          {/* <TwitterFeed /> */}
        </div>
    </main>
  )
}
