import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ArticleList from '../components/ArticleList'
import {server} from '../config'

export default function Home({articles}) {
  console.log(articles)
  return (
    <div className={styles.container}>
        <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)

  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)

//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }