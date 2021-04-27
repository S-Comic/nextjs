import Head from 'next/head'
/* import styles from '/styles/about.module.css' */
import styles from '../../styles/worlds.module.css'
import posts from '../static/worldData.json'
import { useRouter } from 'next/router'

export default function About() {
  const router = useRouter()
  const post = posts[router.query.id]

  return (

  <section className={styles.heroBanner}>
    <h1 className={styles.heroTitle}> Welcome to {router.query.id} </h1>
    <p> {post.title} </p>
  </section>
  )
}
