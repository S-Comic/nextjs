import posts from '../pages/static/worldData.json'
import content from '../pages/worlds/note_contents.json'
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
import { v4 as uuidv4 } from 'uuid';
var i
var pageContent = {}

import styles from '../styles/worlds.module.css'

function Htmlimport(){

    function findContent(){
      var currentPage = splitUrl()
      console.log(currentPage)

      for (i=0; i < content.length; i++){
        if (content[i].noteId == currentPage){
          pageContent.__html = content[i].content
          return pageContent
        }
      }
    }

    function splitUrl(){
      if (typeof window !== "undefined"){
      var segment_str = window.location.pathname; // return segment1/segment2/segment3/segment4
      var segment_array = segment_str.split( '/' );
      var last_segment = segment_array.pop();
      return last_segment;
  }
return last_segment;
    }    return(
          <div dangerouslySetInnerHTML={findContent()}>
          </div>
        )
};



export default Htmlimport
