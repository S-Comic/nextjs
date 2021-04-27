import Head from 'next/head'
/* import styles from '/styles/about.module.css' */
import styles from '../../styles/worlds.module.css'
import posts from '../static/worldData.json'
import { useRouter } from 'next/router'

/*

function About() {
  const router = useRouter()
  const post = posts[router.query.id]

  return (

  <section className={styles.heroBanner}>
    <h1 className={styles.heroTitle}> Welcome to {router.query.id} </h1>
    <p> {post.title} </p>
  </section>
  )
}

export default About

*/

const Post = props => {
  return (
    <div>
      <section className={styles.heroBanner}>
        <h1 className={styles.heroTitle}> Welcome to {props.post.title}</h1>
        <p> {props.post.title} </p>
      </section>
    </div>
  )
}

Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id]
  }
}

export default Post
