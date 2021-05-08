import posts from '../pages/static/worldData.json'
import Header from '../components/header.js'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
var base = posts.files[0].children.length
let array = []
let secondArray = []
let thirdArray = []
var key = 0

import styles from '../styles/worlds.module.css'


function DocumentNavigation(){

function loopLayerOne(){
  array = []
  var i
  for (i=0; i < posts.files[0].children.length; i++){
    array.push(

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={key}>
            &#11166;
            </Accordion.Toggle>
            {posts.files[0].children[i].title}
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
      if (typeof posts.files[0].children[i].children[r].children !== 'undefined'){
      secondArray.push(

        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={key}>
              &#11166;
              </Accordion.Toggle>
              {posts.files[0].children[i].children[r].title}
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
        <Card>
          <Card.Header>
            {posts.files[0].children[i].children[r].title}
          </Card.Header>
        </Card>
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
          <Card>
            <Card.Header>
              {posts.files[0].children[i].children[r].children[a].title}
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
