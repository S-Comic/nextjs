import posts from '../pages/static/worldData.json'
import Header from '../components/header.js'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faCheckSquare, faCoffee, faFolder, faFileAlt, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from "react";

library.add(far, faCheckSquare, faCoffee, faFolder, faFileAlt, faFolderOpen)

var base = posts.files[0].children.length
let array = []
let secondArray = []
let thirdArray = []
var key = 0

import styles from '../styles/worlds.module.css'


function DocumentNavigation(key){



function loopLayerOne(){
  array = []
  var i
  for (i=0; i < posts.files[0].children.length; i++){
    const [icon, setIcon] = useState(faFolder);
    array.push(

      <Accordion defaultActiveKey="0">
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
            <FontAwesomeIcon className={styles.navigationDropdownIcon} key={i} icon={icon} />
            </Accordion.Toggle>
            <div className={styles.documentLinkContainer}><a className={styles.documentLink}>{posts.files[0].children[i].title}</a></div>
          </Card.Header>
          <Accordion.Collapse eventKey={key}>
            <Card.Body>{loopLayerTwo(i)}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    )
    key = key + 1
  }
  return array;

}

function loopLayerTwo(i){
  if (typeof posts.files[0].children[i].children !== 'undefined'){
    var r = 0
    secondArray = []
    var path = "/" + String(posts.files[0].children[i].title)+ "/" + String(posts.files[0].children[i].children[r].title)
    for (r=0; r < posts.files[0].children[i].children.length; r++){
      const [icon, setIcon] = useState(faFolder);
      if (typeof posts.files[0].children[i].children[r].children !== 'undefined'){
      secondArray.push(

        <Accordion defaultActiveKey="0">
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
                <div className={styles.documentLinkContainer}><a className={styles.documentLink}>{posts.files[0].children[i].children[r].title}</a></div>
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
        <Accordion defaultActiveKey="0">
        <Card className={styles.navigationItemContainer}>
          <Card.Header className={styles.navigationItemSingle}>
          <Accordion.Toggle className={styles.navigationDropdownArrow} as={Button} variant="link" eventKey={key}>
          <FontAwesomeIcon className={styles.navigationDropdownIcon} icon="file-alt" />
          </Accordion.Toggle>
              <div className={styles.documentLinkContainer}><a className={styles.documentLink}>{posts.files[0].children[i].children[r].title}</a></div>
          </Card.Header>
        </Card>
        </Accordion>
      )
    }
      key = key + 1
    }
    return secondArray;
  }
}

function loopLayerThree(i, r){
  if (typeof posts.files[0].children[i].children[r].children !== 'undefined'){
    var a = 0
    thirdArray = []
    for (a=0; a < posts.files[0].children[i].children[r].children.length; a++){
      thirdArray.push(
        <Card className={styles.navigationItemContainer}>
          <Card.Header className={styles.navigationItemSingle}>
          <Accordion.Toggle className={styles.navigationDropdownArrow} as={Button} variant="link" eventKey={key}>
          <FontAwesomeIcon className={styles.navigationDropdownIcon} icon="file-alt" />
          </Accordion.Toggle>
                <a className={styles.documentLinkContainer}><a className={styles.documentLink}>{posts.files[0].children[i].children[r].children[a].title}</a></a>
            </Card.Header>
          </Card>
      )
        key = key + 1
    }
    return thirdArray;
  }
}


  return loopLayerOne();

}
export default DocumentNavigation
