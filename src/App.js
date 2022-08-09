//import logo from './logo.svg';
import React from 'react';
import Todo from './Todo';
import AddTodo from "./AddTodo.js";
import {Paper, List, Container} from "@material-ui/core";
import './App.css';
import {call} from './service/ApiService';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //item : {id : 0, title : "Hello world 1", done : true}
      items : [
        { id : "0", title : "Hello world 1", done: true},
        { id : "1", title : "Hello world 2", done: false},
      ],
    };
  }

  add = (item) => {
    // const thisItems = this.state.items;
    // item.id = "ID-" + thisItems.length;
    // item.done = false;
    // thisItems.push(item);
    // this.setState({items : thisItems});
    // console.log("items : ", this.state.items);
    call("/todo","POST",item)
    .then((response) => this.setState({ items : response.data})
    );
  }
  
  delete = (item) => {
    // const thisItems = this.state.items;
    // console.log("Before Update ITems : ", this.state.items);
    // const newItems = thisItems.filter(e => e.id !== item.id);
    // this.setState({items:newItems},() =>{
    //   console.log("Update Items : ", this.state.items);
    // });
    call("/todo","DELETE",item)
    .then((response) => this.setState({ items : response.data}));
  }

  update = (item) => {
    call("/todo","PUT",item)
    .then((response)=>{
      this.setState({ items : response.data })
    });
  }

  componentDidMount(){
    // const requestOptions = {
    //   method : "GET",
    //   headers : {"Content-Type" : "application/json"},
    // };

    // fetch("http://localhost:8080/todo",requestOptions)
    // .then((response) => response.json())
    // .then(
    //   (response) => {
    //     this.setState({
    //       items : response.data,
    //     });
    //   },
    //   (error) => {
    //     this.setState({
    //       error,
    //     });
    //   }
    // );

    call("/todo","GET", null)
    .then((response) => this.setState({items : response.data}));
  }

  render(){

    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin : 16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete} update={this.update}/>
          ))}
        </List>
      </Paper>
    );
    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add}/>
          <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    )
  }
}

export default App;
