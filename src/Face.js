import React from 'react';
import './App.css';
import coconut from'./coconut.png';
import banana from './banana.jpg';
import orange from './orange.jpg';
import snake from './Snake.jpg';
import cherry from './cherries.jpg';
import seven from './seven.jpg';
export default class Face extends React.Component {
constructor(props) {
  super(props);
    
  this.state = {
   id: 1,
   Max: 0, 
   img: 0,
   info: "",
   age: 0,
   name: "",
   address:"",
   addInfo:"",
   jso: 0,
   face:[coconut,banana, orange, snake,cherry,seven],
   Felony1: "",
   Felony2: "",
   Felony3: "", 
   Felony4: "",
   Felony5: "",
   Misdemeanor1: "",
   Misdemeanor2: "",
   Misdemeanor3: "",
   Misdemeanor4: "",
   Misdemeanor5: ""
  }
  this.initPerson = this.initPerson.bind(this);
  this.initPerson2 = this.initPerson2.bind(this);
  this.next = this.next.bind(this);
  this.prev = this.prev.bind(this);
  this.nextPerson = this.nextPerson.bind(this);
  this.previousPerson = this.previousPerson.bind(this);
  this.exactPerson = this.exactPerson.bind(this);
  this.updateValue = this.updateValue.bind(this);
  this.onChange = this.onChange.bind(this);

}


  componentDidMount() {
    const self = this;
    fetch('http://localhost:3001/get', {
      method: 'GET',
      headers: {"Content-Type": "application/json"},
      }).then(function(response) { 
        return response.json(); 
      }).then(function(body){
        console.log(body[0].id);
        self.setState({jso: body[0].id+1});
        self.setState({Max: self.state.jso});
        self.setState({id: self.state.jso});
        self.setState({info: document.getElementById('info').value})
        self.setState({age: document.getElementById('age').value})
        self.setState({name: document.getElementById('name').value})
        self.setState({address: document.getElementById('address').value})
        self.setState({addInfo: document.getElementById('Add info').value})
        self.setState({ Felony1: document.getElementById('felony1').checked.toString()})
        self.setState({ Felony2: document.getElementById('felony2').checked.toString()})
        self.setState({ Felony3: document.getElementById('felony3').checked.toString()})
        self.setState({ Felony4: document.getElementById('felony4').checked.toString()})
        self.setState({ Felony5: document.getElementById('felony5').checked.toString()})
        self.setState({ Misdemeanor1: document.getElementById('misdemeanor1').checked.toString()})
        self.setState({ Misdemeanor2: document.getElementById('misdemeanor2').checked.toString()})
        self.setState({ Misdemeanor3: document.getElementById('misdemeanor3').checked.toString()})
        self.setState({ Misdemeanor4: document.getElementById('misdemeanor4').checked.toString()})
        self.setState({ Misdemeanor5: document.getElementById('misdemeanor5').checked.toString()})
        console.log(self.state.id);
      })
    }
  next(){
    if(this.state.img < this.state.face.length - 1){
    this.setState({img: this.state.img + 1})
    }
  }
  prev(){
    if(this.state.img > 0){
    this.setState({img: this.state.img - 1})
    }
  }
  nextPerson(e){
    e.preventDefault();
    const self = this;
    if(this.state.id+1 > this.state.Max){}
    else{
    this.setState({id: this.state.id+1})
    console.log(this.state.id);
    fetch('http://localhost:3001/getusers', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        id: this.state.id,
    })}).then(function(response) {
        return response.json();
      }).then(function(body){
        console.log(body);
        self.setState({id: body[0].id});
        self.setState({img: body[0].img});
        self.setState({info: body[0].info});
        self.setState({age: body[0].age});
        self.setState({name: body[0].name});
        self.setState({address: body[0].address});
        self.setState({addInfo: body[0].addInfo});
        self.setState({Felony1: body[0].Felony1});
        self.setState({Felony2: body[0].Felony2});
        self.setState({Felony3: body[0].Felony3});
        self.setState({Felony4: body[0].Felony4});
        self.setState({Felony5: body[0].Felony5});
        self.setState({Misdemeanor1: body[0].Misdemeanor1});
        self.setState({Misdemeanor2: body[0].Misdemeanor2});
        self.setState({Misdemeanor3: body[0].Misdemeanor3});
        self.setState({Misdemeanor4: body[0].Misdemeanor4});
        self.setState({Misdemeanor5: body[0].Misdemeanor5});
        console.log(self.state.id);
      })
    }
  }
  previousPerson(e){
    e.preventDefault();
    const self = this;
    if(this.state.id-1 < 0){}
    else{
    this.setState({id: this.state.id-1})
    console.log(this.state.id);
    fetch('http://localhost:3001/getusers', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        id: this.state.id,
    })}).then(function(response) {
        return response.json();
      }).then(function(body){
        console.log(body);
        self.setState({id: body[0].id});
        self.setState({img: body[0].img});
        self.setState({info: body[0].info});
        self.setState({age: body[0].age});
        self.setState({name: body[0].name});
        self.setState({address: body[0].address});
        self.setState({addInfo: body[0].addInfo});
        self.setState({Felony1: body[0].Felony1});
        self.setState({Felony2: body[0].Felony2});
        self.setState({Felony3: body[0].Felony3});
        self.setState({Felony4: body[0].Felony4});
        self.setState({Felony5: body[0].Felony5});
        self.setState({Misdemeanor1: body[0].Misdemeanor1});
        self.setState({Misdemeanor2: body[0].Misdemeanor2});
        self.setState({Misdemeanor3: body[0].Misdemeanor3});
        self.setState({Misdemeanor4: body[0].Misdemeanor4});
        self.setState({Misdemeanor5: body[0].Misdemeanor5});
        console.log(self.state.id);
      })
    }
  }
  exactPerson(){
    const self = this;
    console.log(this.state.Max);
    if(document.getElementById('Varient').value > this.state.Max){}
    else if(this.state.id-1 < 0){}
    else{
    self.setState({id: parseInt(document.getElementById('Varient').value)})
    fetch('http://localhost:3001/getusers', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        id: this.state.id -1,
    })}).then(function(response) {
        return response.json();
      }).then(function(body){
        console.log(body);
        self.setState({id: body[0].id});
        self.setState({img: body[0].img});
        self.setState({info: body[0].info});
        self.setState({age: body[0].age});
        self.setState({name: body[0].name});
        self.setState({address: body[0].address});
        self.setState({addInfo: body[0].addInfo});
        self.setState({Felony1: body[0].Felony1});
        self.setState({Felony2: body[0].Felony2});
        self.setState({Felony3: body[0].Felony3});
        self.setState({Felony4: body[0].Felony4});
        self.setState({Felony5: body[0].Felony5});
        self.setState({Misdemeanor1: body[0].Misdemeanor1});
        self.setState({Misdemeanor2: body[0].Misdemeanor2});
        self.setState({Misdemeanor3: body[0].Misdemeanor3});
        self.setState({Misdemeanor4: body[0].Misdemeanor4});
        self.setState({Misdemeanor5: body[0].Misdemeanor5});
        console.log(self.state.id);
      })
    }
  }
  initPerson(e){
  e.preventDefault();
  this.setState({id: this.state.Max}); 
  this.setState({info: document.getElementById('info').value})
  this.setState({age: document.getElementById('age').value})
  this.setState({name: document.getElementById('name').value})
  this.setState({address: document.getElementById('address').value})
  this.setState({addInfo: document.getElementById('Add info').value})
  this.setState({img: this.state.img})
  this.setState({id: this.state.id +1});
  this.setState({id: this.state.Max}); 
  fetch('http://localhost:3000/', {
  method: 'POST',
  body: JSON.stringify({
      id: this.state.Max,
      img: this.state.img,
      info: this.state.info, 
      age: this.state.age,
      name: this.state.name,
      address: this.state.address,
      addInfo: this.state.addInfo,
      felony1: document.getElementById('felony1').checked.toString(),
      felony2: document.getElementById('felony2').checked.toString(),
      felony3: document.getElementById('felony3').checked.toString(),
      felony4: document.getElementById('felony4').checked.toString(),
      felony5: document.getElementById('felony5').checked.toString(),
      misdemeanor1: document.getElementById('misdemeanor1').checked.toString(),
      misdemeanor2: document.getElementById('misdemeanor2').checked.toString(),
      misdemeanor3: document.getElementById('misdemeanor3').checked.toString(),
      misdemeanor4: document.getElementById('misdemeanor4').checked.toString(),
      misdemeanor5: document.getElementById('misdemeanor5').checked.toString()
  }),headers: {"Content-Type": "application/json"},
  }).then(function(response) {  
    return response.json();
  }).then(function(body){
    console.log(body);
  })
  this.setState({Max: this.state.Max + 1});
}
initPerson2(e){
  e.preventDefault();
  const self = this;
  console.log(this.state.id);
  fetch('http://localhost:3001/getusers', {
  method: 'POST',
  body: JSON.stringify({
      id: this.state.id,
  }),headers: {"Content-Type": "application/json"},
  }).then(function(response) {  
    return response.json();
  }).then(function(body){
    console.log(body[0]);
    if(body[0] !== undefined){
      self.setState({id: body[0].id});
      self.setState({img: body[0].img});
      self.setState({info: body[0].info});
      self.setState({age: body[0].age});
      self.setState({name: body[0].name});
      self.setState({address: body[0].address});
      self.setState({addInfo: body[0].addinfo});
      self.setState({Felony1: body[0].Felony1});
      self.setState({Felony2: body[0].Felony2});
      self.setState({Felony3: body[0].Felony3});
      self.setState({Felony4: body[0].Felony4});
      self.setState({Felony5: body[0].Felony5});
      self.setState({Misdemeanor1: body[0].Misdemeanor1});
      self.setState({Misdemeanor2: body[0].Misdemeanor2});
      self.setState({Misdemeanor3: body[0].Misdemeanor3});
      self.setState({Misdemeanor4: body[0].Misdemeanor4});
      self.setState({Misdemeanor5: body[0].Misdemeanor5});
    }
    else{fetch('http://localhost:3001/check', {
      method: 'POST',
      body: JSON.stringify({
          id: self.state.id,
          img: self.state.img,
          info: self.state.info, 
          age: self.state.age,
          name: self.state.name,
          address: self.state.address,
          addInfo: self.state.addInfo,
          felony1: self.state.Felony1,
          felony2: self.state.Felony2,
          felony3: self.state.Felony3,
          felony4: self.state.Felony4,
          felony5: self.state.Felony5,
          misdemeanor1: self.state.Misdemeanor1,
          misdemeanor2: self.state.Misdemeanor2,
          misdemeanor3: self.state.Misdemeanor3,
          misdemeanor4: self.state.Misdemeanor4,
          misdemeanor5: self.state.Misdemeanor5
      }),headers: {"Content-Type": "application/json"},
      }).then(function(response) {  
        return response.json();
      }).then(function(body){
        console.log(body);
      self.setState({id: body[0].id});
      self.setState({img: body[0].img});
      self.setState({info: body[0].info});
      self.setState({age: body[0].age});
      self.setState({name: body[0].name});
      self.setState({address: body[0].address});
      self.setState({addInfo: body[0].addInfo});
      self.setState({Felony1: body[0].Felony1});
      self.setState({Felony2: body[0].Felony2});
      self.setState({Felony3: body[0].Felony3});
      self.setState({Felony4: body[0].Felony4});
      self.setState({Felony5: body[0].Felony5});
      self.setState({Misdemeanor1: body[0].Misdemeanor1});
      self.setState({Misdemeanor2: body[0].Misdemeanor2});
      self.setState({Misdemeanor3: body[0].Misdemeanor3});
      self.setState({Misdemeanor4: body[0].Misdemeanor4});
      self.setState({Misdemeanor5: body[0].Misdemeanor5});
      })
    }
  })
  
}
updateValue(e){
  var self = this;
  e.preventDefault();
  fetch('http://localhost:3001/put/', {
    method: 'PUT',
    body: JSON.stringify({
      id: parseInt(document.getElementById('Varient').value),
      info: document.getElementById('info').value,
      age: document.getElementById('age').value,
      name: document.getElementById('name').value,
      address: document.getElementById('address').value,
      addInfo: document.getElementById('Add info').value,
      img: this.state.img,
      felony1: document.getElementById('felony1').checked.toString(),
      felony2: document.getElementById('felony2').checked.toString(),
      felony3: document.getElementById('felony3').checked.toString(),
      felony4: document.getElementById('felony4').checked.toString(),
      felony5: document.getElementById('felony5').checked.toString(),
      misdemeanor1: document.getElementById('misdemeanor1').checked.toString(),
      misdemeanor2: document.getElementById('misdemeanor2').checked.toString(),
      misdemeanor3: document.getElementById('misdemeanor3').checked.toString(),
      misdemeanor4: document.getElementById('misdemeanor4').checked.toString(),
      misdemeanor5: document.getElementById('misdemeanor5').checked.toString()
    }),headers: {"Content-Type": "application/json"},
    }).then(function(response) {  
      return response.text();
    }).then(function(body){
      console.log(body);
      self.setState({id: body[0].id});
      self.setState({img: body[0].img});
      self.setState({info: body[0].info});
      self.setState({age: body[0].age});
      self.setState({name: body[0].name});
      self.setState({address: body[0].address});
      self.setState({addInfo: body[0].addInfo});
      self.setState({Felony1: body[0].Felony1});
      self.setState({Felony2: body[0].Felony2});
      self.setState({Felony3: body[0].Felony3});
      self.setState({Felony4: body[0].Felony4});
      self.setState({Felony5: body[0].Felony5});
      self.setState({Misdemeanor1: body[0].Misdemeanor1});
      self.setState({Misdemeanor2: body[0].Misdemeanor2});
      self.setState({Misdemeanor3: body[0].Misdemeanor3});
      self.setState({Misdemeanor4: body[0].Misdemeanor4});
      self.setState({Misdemeanor5: body[0].Misdemeanor5});
    })
    console.log(this.Misdemeanor5);
}
onChange(e){
  const value = e.target.value
  this.setState(() => ({
    id: value
  }))
}
  render(){ 
  return (
    <div>
      <h1>///Welcome to FBI-DOCS\\\</h1>
      <h2>//////The open source FBI FILE website\\\\\\</h2>
      <form>
      <input type = 'text' id = 'name' defaultValue = 'John Doe'></input>
      <input type = 'text' id = 'info' defaultValue = 'adjective'></input>
      <input type = 'number' id = 'age' defaultValue = '23'></input>
      <input type = 'text' id = 'address' defaultValue = '1800 Null Lane'></input>
      <input type = 'text' id = 'Add info' defaultValue = 'Additional Info'></input>
      <img id = 'img' style = {{width: '250px', height: '250px'}}src = {this.state.face[this.state.img]} alt = 'Ugly Person'></img>
      <button type = 'button' onClick={this.next}>next</button>
      <button type = 'button' onClick={this.prev}>prev</button>><br></br>
      Felony 1<input type = 'checkbox' id = 'felony1' ></input>Misdemeanor 1<input type = 'checkbox' id = 'misdemeanor1' ></input><br></br>
      Felony 2<input type = 'checkbox' id = 'felony2' ></input>Misdemeanor 2<input type = 'checkbox' id = 'misdemeanor2' ></input><br></br>
      Felony 3<input type = 'checkbox' id = 'felony3' ></input>Misdemeanor 3<input type = 'checkbox' id = 'misdemeanor3' ></input><br></br>
      Felony 4<input type = 'checkbox' id = 'felony4' ></input>Misdemeanor 4<input type = 'checkbox' id = 'misdemeanor4' ></input><br></br>
      Felony 5<input type = 'checkbox' id = 'felony5' ></input>Misdemeanor 5<input type = 'checkbox' id = 'misdemeanor5' ></input><br></br> 
      <button type = 'button' onClick={(e) => this.initPerson(e)}>submit</button>
      </form>
      <h3>Copyable FILE Text</h3>
      <p>Hey I just Looked up {this.state.name} they live at {this.state.address} </p> <br></br>
      <p>and they are {this.state.age} years old, and they are a/an {this.state.info} person</p><br></br>
      <p>CRIME DATA</p><br></br>
      <p>{this.state.addInfo}</p><br></br>
      <button type = 'submit' onClick={(e) => this.nextPerson(e)}>next person</button>
      <button type = 'submit' onClick={(e) => this.previousPerson(e)}>previous person</button>
      <form>
      <input type = 'text' id = 'Varient' defaultValue = '1' onChange={this.onChange} ></input>
      <button type = 'submit' onClick={(e) => this.initPerson2(e)}>Submit</button>
      <button type = 'submit' onClick={(e) => this.updateValue(e)}>Update</button>
      </form>
    </div>
  );
  }
}