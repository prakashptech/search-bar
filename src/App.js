import React from 'react';
import './App.css';
import addIcon from './add_icon.png'
import ItemsContainer from './ItemsContainer';

class App extends React.Component {

  state = {
    items: [
      'Apple',
      'Mango',
      'Banana',
      'Orange' ,
      'Cherry'
    ],
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    return this.state.items.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  addItem(e){
   // const {items}=this.state;
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 5; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    const newItem =result;
    this.setState({
      items: [...this.state.items,newItem]
    })
  }

    render(){
      return (
        <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
           
          <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'search for an item'/>
          <button onClick={(e)=>{this.addItem(e)}}><img src={addIcon} alt="Add" style={{width:20,height:20}}/> </button> <br></br>
         
          <ItemsContainer items = {this.dynamicSearch()}/>
         
        </div>
      );
    }
}

export default App;