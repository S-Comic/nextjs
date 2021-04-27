import Head from 'next/head'
/* import styles from '/styles/about.module.css' */
import styles from '../../styles/worlds.module.css'
import posts from '../static/worldData.json'
import { useRouter } from 'next/router'
import Layout from "../../components/layout";
import Header from "../../components/header";

const Post = props => <layout>
    <Header />
    <main className={styles.worlds}>
      <section className={styles.heroBanner}>
        <h1 className={styles.heroTitle}> Welcome to {props.post.title}</h1>
        <p> {props.post.subtitle} </p>
      </section>
    </main>
</layout>
Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id]
  }
}

export default Post
