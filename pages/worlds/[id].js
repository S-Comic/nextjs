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
import notes from './notes.json'



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
  const [mode, setMode] = useState("lightBackground")
  const [count, setCount] = useState(`
    <h1>Work in progress!</h1>

    <p>This is a work-in-progress database of notes from Buried Under Ash, Oscar's DnD game.
    The eventual aim is to be able to use this site for multiple different worlds and notes,
    but this current build is only for BUA.</p>

    <p>You can use the menu on the right to navigate the filesystem, which is made up
    of files and folders (as denoted by corresponding icons).
    Clicking one of the folder icons will display that folder's children, whereas clicking
    a folder's title will show it's content in this box (yes, folders can hold content too!). Clicking anywhere
    on a file will display it's content.</p>

    <p>Obviously this is still WIP, so there's some things missing or features flat out not working right now.</p>
    <p><strong>Known issues / things to add:</strong></p>
    <ul>
    <li>Many notes are still missing content</li>
    <li>In-note links are not yet functional</li>
    <li>Images also do not work currently</li>
    <li>Dark mode. It's so bloody bright</li>
    <li>Improve mobile experience</li>
    <li>The code is horrific and I need to clean it up for my own sanity</li>
    </ul>

    <p>Otherwise, have fun browsing!</p>
    `);

  function combineContent(docId){
    var doclink = String(content[docId].title)
    doclink = "<h1>" + doclink + "</h1>"
    if (String(content[docId].content) != ""){
        var doclink2 = String(content[docId].content)
    }
    else{
      var doclink2 = `<h4><strong style='color: red; '>Fuck.</strong></h4>
      <p>No content found for this article, sorry about that.
      I'll try to add something here soon.</p>`
    }
    doclink = doclink + doclink2
    setCount(doclink)

  }

  function createLinks(){
        var pageContent = {}
        var i = 0

        for (i=0; i < 411; i++){

          if (notes[i].isDeleted == 0){


          Object.defineProperty(pageContent, notes[i].noteId,{
            value: {title: notes[i].title, content: content[notes[i].noteId]},
            enumerable: true
          });

        }
        }

  }

  function changeMode(tempMode){
  if (mode == "lightBackground"){
    tempMode = "darkBackground"
  }
  else{
  tempMode = "lightBackground"
  }
  return tempMode
  }

  function LoopLayerOne(){
    var key = 0
    array = []

    var i = 0
    for (i=0; i < posts.files[0].children.length; i++){

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

              <a id={currentId} onClick={() => combineContent(event.target.id)} className={styles.documentLinkContainer}>
              <a id={currentId} onClick={() => combineContent(event.target.id)} className={styles.documentLink}>{posts.files[0].children[i].title}</a></a>
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
                  <a id={currentId} onClick={() => combineContent(event.target.id)} className={styles.documentLinkContainer}>
                  <a id={currentId} onClick={() => combineContent(event.target.id)} className={styles.documentLink}>{posts.files[0].children[i].children[r].title}</a></a>
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
                <a id={currentId} onClick={() => combineContent(event.target.id)} className={styles.documentLinkContainer}>
                <a id={currentId} onClick={() => combineContent(event.target.id)} className={styles.documentLink}>{posts.files[0].children[i].children[r].title}</a></a>
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
                  <a id={currentId} onClick={() => combineContent(event.target.id)} className={styles.documentLinkContainer}>
                  <a id={currentId} onClick={() => combineContent(event.target.id)} className={styles.documentLink}>{posts.files[0].children[i].children[r].children[a].title}</a></a>
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
     <main className={styles.worlds}>
     {/*
        <section className={styles.heroBanner}>
          <h1 className={styles.heroTitle}>Carthus</h1>
          <p> The black desert </p>
        </section>
        */}
        <button onClick={() => setMode(changeMode(mode))}> click </button>
        <Container className={styles.worldsContainer}>
          <Row>
            <Col md={4}>
            <Card className={styles.worldsCard + " " + styles[mode]}>
              <Card.Body className={styles.cardBody}>

                    {LoopLayerOne()}
              </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card className={styles.contentCard}>
              <Card.Body className={styles.cardBody}>
              <div dangerouslySetInnerHTML={{__html: count}}>
              </div>
              </Card.Body>
            </Card>
            </Col>

          </Row>
        </Container>
      </main>
  )
}

Post.getInitialProps = ({ query }) => {
  return {
    post: content[query.id]
  }
}


export default Post
