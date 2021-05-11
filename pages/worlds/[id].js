import Head from 'next/head'
/* import styles from '/styles/about.module.css' */
import styles from '../../styles/worlds.module.css'
import { useRouter } from 'next/router'
import Header from '../../components/header.js'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import DocumentNavigation from '../../components/indexing.js'
import Htmlimport from '../../components/markdownimport.js'
import content from './note_contents.json'

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import posts from '../static/worlds.json'

import ReactMarkdown from 'react-markdown'
import markdownl from '../../components/Juno Whitfoot.md'
var i
var pageContent = {}

library.add(far, faCheckSquare, faCoffee)

const Post = props => {



  return (
   <body>
     <main className={styles.worlds}>

        <section className={styles.heroBanner}>
          <h1 className={styles.heroTitle}>Carthus</h1>
          <p> The black desert </p>
        </section>

        <Container className={styles.worldsContainer}>
          <Row>
            <Col md={3}>
            <Card className={styles.worldsCard}>
              <Card.Body>
                    <h2 className={styles.worldsSubtitle}>Document Navigation</h2>
                    <DocumentNavigation />
              </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card className={styles.contentCard}>
              <Card.Body>
              <Htmlimport />
              </Card.Body>
            </Card>
            </Col>

          </Row>
        </Container>
      </main>
    </body>
  )
}

Post.getInitialProps = ({ query }) => {
  return {
    post: posts[query.id]
  }
}


export default Post
