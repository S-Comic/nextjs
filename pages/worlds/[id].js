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



import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ReactMarkdown from 'react-markdown'
var i

var base = posts.files[0].children.length
let array = []
let secondArray = []
let thirdArray = []
var key = 0
import { v4 as uuidv4 } from 'uuid';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faCoffee, faFolder, faFileAlt, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from "react";
library.add(far, faCheckSquare, faCoffee, faFolder, faFileAlt, faFolderOpen)
import posts from '../static/worldData.json'


const Post = props => {
  const [count, setCount] = useState(props.post);

  function handleClick(a, b){

  }

  function LoopLayerOne(){
    var key = 0
    array = []

    var i = 0
    for (i=0; i < posts.files[0].children.length; i++){
      console.log(i)
      console.log(posts.files[0].children[i].noteId)
      key = key + 1
      var currentId = posts.files[0].children[i].noteId
      const [icon, setIcon] = useState(faFolder);
      array.push(

        <Accordion defaultActiveKey="0" key={posts.files[0].children[i].noteId}>
          <Card className={styles.navigationItemContainer}>
            <Card.Header className={styles.navigationItem}>
              <Accordion.Toggle className={styles.navigationDropdownArrow} as={Button} variant="link" eventKey={key} onClick={() => {
                if (icon == faFolder){
                  setIcon(faFolderOpen);
                }
                else{
                  setIcon(faFolder);
                }

              }}>
              <FontAwesomeIcon className={styles.navigationDropdownIcon} icon={icon} />
              </Accordion.Toggle>

              <a id={currentId} onClick={() => setCount(content[event.target.id])} className={styles.documentLinkContainer}>
              <a className={styles.documentLink}>{posts.files[0].children[i].title}</a></a>
            </Card.Header>
            <Accordion.Collapse eventKey={key}>
              <Card.Body>{loopLayerTwo(i, key)}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

      )
    }
    return array;

  }

  function loopLayerTwo(i, key){
    if (typeof posts.files[0].children[i].children !== 'undefined'){
      var r = 0
      secondArray = []

      var path = "/" + String(posts.files[0].children[i].title)+ "/" + String(posts.files[0].children[i].children[r].title)
      for (r=0; r < posts.files[0].children[i].children.length; r++){
            key = key + 1
            var currentId = posts.files[0].children[i].children[r].noteId
        const [icon, setIcon] = useState(faFolder);
        if (typeof posts.files[0].children[i].children[r].children !== 'undefined'){
        secondArray.push(

          <Accordion defaultActiveKey="0" key={posts.files[0].children[i].children[r].noteId}>
          <Card className={styles.navigationItemContainer}>
            <Card.Header className={styles.navigationItem}>
                <Accordion.Toggle className={styles.navigationDropdownArrow} as={Button} variant="link" eventKey={key}onClick={() => {
                  if (icon == faFolder){
                    setIcon(faFolderOpen);
                  }
                  else{
                    setIcon(faFolder);
                  }

                }}>
                <FontAwesomeIcon className={styles.navigationDropdownIcon} icon={icon} />
                </Accordion.Toggle>
                  <a id={currentId} onClick={() => setCount(content[event.target.id])} className={styles.documentLinkContainer}>
                  <a id={currentId} onClick={() => setCount(content[event.target.id])} className={styles.documentLink}>{posts.files[0].children[i].children[r].title}</a></a>
              </Card.Header>
              <Accordion.Collapse eventKey={key}>
                <Card.Body>{loopLayerThree(i, r)}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

        )
      }
      else{
        secondArray.push(
          <Accordion defaultActiveKey="0" key={posts.files[0].children[i].children[r].noteId}>
          <Card className={styles.navigationItemContainer}>
            <Card.Header className={styles.navigationItemSingle}>
            <Accordion.Toggle className={styles.navigationDropdownArrow} as={Button} variant="link" eventKey={key}>
            <FontAwesomeIcon className={styles.navigationDropdownIcon} icon="file-alt" />
            </Accordion.Toggle>
                <a id={currentId} onClick={() => setCount(content[event.target.id])} className={styles.documentLinkContainer}>
                <a id={currentId} onClick={() => setCount(content[event.target.id])} className={styles.documentLink}>{posts.files[0].children[i].children[r].title}</a></a>
            </Card.Header>
          </Card>
          </Accordion>
        )
      }
      }
      return secondArray;
    }
  }

  function loopLayerThree(i, r){
    if (typeof posts.files[0].children[i].children[r].children !== 'undefined'){
      var a = 0
      thirdArray = []
      for (a=0; a < posts.files[0].children[i].children[r].children.length; a++){
        var currentId = posts.files[0].children[i].children[r].children[a].noteId
        thirdArray.push(
          <Card className={styles.navigationItemContainer} key={posts.files[0].children[i].children[r].children[a].noteId}>
            <Card.Header className={styles.navigationItemSingle}>
            <Accordion.Toggle className={styles.navigationDropdownArrow} as={Button} variant="link" eventKey={key}>
            <FontAwesomeIcon className={styles.navigationDropdownIcon} icon="file-alt" />
            </Accordion.Toggle>
                  <a id={currentId} onClick={() => setCount(content[event.target.id])} className={styles.documentLinkContainer}>
                  <a id={currentId} onClick={() => setCount(content[event.target.id])} className={styles.documentLink}>{posts.files[0].children[i].children[r].children[a].title}</a></a>
              </Card.Header>
            </Card>
        )
          key = key + 1
      }
      return thirdArray;
    }
  }


  function changeVar(){
    return "Check"
  }

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
                    {LoopLayerOne()}
              </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card className={styles.contentCard}>
              <Card.Body>
              <div dangerouslySetInnerHTML={{__html: count}}>
              </div>
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
    post: content[query.id]
  }
}


export default Post
