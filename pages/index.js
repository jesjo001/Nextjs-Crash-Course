import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div className={styles.container}>
        <Head>
          <title>AutomationLounge News</title>
          <meta name="description" content="AutomationLounge" />
        </Head>

        <ArticleList articles={articles} />
    </div>
  )
}

import {server} from '../config'
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}