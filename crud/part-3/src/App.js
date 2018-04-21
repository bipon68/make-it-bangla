import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

//var Lorem = require('react-lorem-component');
import { Test } from 'dh-component';
import Portfolio from './components/Portfolio'
import SingleView from './components/SingleView'


import { Switch, Route } from 'react-router'

// const data = [
//     {
//       "id": 1501798834150,
//       "title": "MatLang one",
//       "image": "http://via.placeholder.com/450x250",
//       "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus"
//     },
//     {
//       "id": 1501798834151,
//       "title": "MatLang two",
//       "image": "http://via.placeholder.com/450x250",
//       "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus"
//     },
//     {
//       "id": 1501798834152,
//       "title": "MatLang three",
//       "image": "http://via.placeholder.com/450x250",
//       "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus"
//     }
// ]


// stateless component
    class App extends React.Component{

      constructor(){
        super()
        this.state = {
          posts: [
                  // {
                  //   "id": 1501798834150,
                  //   "title": "Item one",
                  //   "image": "http://via.placeholder.com/450x250",
                  //   "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus"
                  // },
                  // {
                  //   "id": 1501798834151,
                  //   "title": "Item two",
                  //   "image": "http://via.placeholder.com/450x250",
                  //   "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus"
                  // },
                  // {
                  //   "id": 1501798834152,
                  //   "title": "Item three",
                  //   "image": "http://via.placeholder.com/450x250",
                  //   "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus"
                  // }
              ]
        }
            this.handleDelete = this.handleDelete.bind(this)
            this.handleSingleView = this.handleSingleView.bind(this)
      }

      handleDelete(id) {
        //const updatedPost = this.state.posts.filter(post => post.id !=id)
        //console.log(updatedPost);
        this.setState({
          //posts: updatedPost
          posts: this.state.posts.filter(post => post.id !=id)
        })
        //return data.filter(data =>data.id !=id)
        //const dat = data.filter(data =>data.id !=id)
        //console.log(dat);
        //alert('Are you sure! You want to delete this id : ' + id)
      }
      handleSingleView(id) {
        //const updatedPost = this.state.posts.filter(post => post.id ===id)
        //console.log(updatedPost);
        this.setState({
          //posts: updatedPost
          posts: this.state.posts.filter(post => post.id ===id)
        })
      }

       componentDidMount() {
        fetch('http://localhost:3001/api/posts').then(res=>res.json())
        .then(data=>{
          //console.log(data);
          this.setState({
            posts: data
          })
        })
      }

      render(){
        return(
          <div>
            <Switch>
              <Route exact path="/" render={()=>(
                  <Portfolio {...this.state}
                    handleDelete={this.handleDelete}
                    handleSingleView={this.handleSingleView}
                  />
              )}/>
              <Route path="/:postID" render={(props)=>(
                  <SingleView {...this.state} {...props}/>
              )}/>
            </Switch>
          </div>
        )
      }

    }

  const About = () => {
    return(
        <div>
          Coming from About
        </div>
    )
  }

export default App;
