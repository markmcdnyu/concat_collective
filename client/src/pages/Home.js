import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/Carousel/Carousel'

import BookmarkCards from '../components/BookmarkCards/BookmarkCards'
import CodeJar from '../components/CodeJar/CodeJar'

import data from '../dummyData.json'
import Api from '../utils/API'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    marginBottom: '20px'
  }
}));

// data[0].

export default function FullWidthGrid() {
  const classes = useStyles();
  const [bookmarkCards, setBookmarkCards] = useState([]);
  const [codeCards, setCodeCards] = useState([]);

  // convert to array  reduce key object 
  // convert to object reduce 
  // reduce explanation 
  /// transformers 


  //call the api to get the cards 
  useEffect(() => {
    console.log('this is a call')

    // set the booksmarks cards 
    Api.getBookmarks()
      .then(res => {
        let data = res.data
        setBookmarkCards(data);
        console.log(data)
      })

    // set code cards
    Api.getSnippets()
      .then(res => {
        let data = res.data
        setCodeCards(data);
        console.log(data)
      })
  }, [])

  // homepage closure
  // id of the card 
  // change setcodecards send and object with the change 
  const handleAdd = (id) => (e) => {
    e.preventDefault(); 
    // find the card in the array 
    // ** then send it to the user database 
    // dispatch(deleteUser(id));
    

  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={10}>
          <Carousel />
          <SearchBar />
          {/* filter buttons here */}
        </Grid>
        <Grid item xs={12} container spacing={3} justify="flex-start" >
          {bookmarkCards.map(card => {
            return <BookmarkCards 
            key={card._id} {...card} 
            handleAdd={handleAdd}  
            />
          })}
          {codeCards.map(card => {
            return <CodeJar key={card._id} {...card} />
          })}
        </Grid>
      </Grid>
    </div>
  );
}


// todo: live chat with help v2  => problem
// todo: create new collection
// todo: code cards get thing 
// todo: code accordion
// todo: delete from you own but not global
// todo: search code cards or links
// todo: search slider for categories (filters) 
    // => new bookmarks or code 

// todo: sandbox api 
// todo: minigame: 

// todo: emoji: rick roll link [DONE]
// todo: (newlyConcated) (language(dropdowm))



// ! modal categories button dropdown cascading
// JavaScript
// React.js
// Node.js
// Python
// HTML
// CSS
// C++
// TypeScript
// Rust
// Scheme
// Java 
// Kotlin
// C#
// Perl
// PHP
// Scala 
// Swift
// MATLAB
// SQL
// R Programming Language
// Golang (Go)
// Ruby
// Other