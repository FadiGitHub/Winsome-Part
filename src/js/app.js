// React Rules
 
 // Dynamic data has to be in a state object
 
 // When defining javascript inside html then we have to use curly braces{}
 
 // If an array is given to render inside a virtial dom then it will auto render
 
 // Make sure the array has data in html format, we can use map for it
  
 //  key attribute has to given for each index item i an Array and 
 //normally we can use the index argument inside the map cb

// we can only change state using the setState(partialState, cb) function
// and we use it to change the value of an existing key
// if we donot change any other existing keys then those key values will not
// change

// We cannot use setState inside the render function as it will keep changing
// the state which means render has to run again hence forming a loop. 

// In JSX html if we have a single tag element like input or img then we have 
// to close it within the same single tag

// Beacuse of <class> being used both in html and javascript, so in react
// when we need to use class inside html-JSX then we call it <className>

//In react custom tags(custom Elements) are written as components that
// return the required html. These components must start with a capital 
// letter

// For React if we want to share the state i.e dynamic data across the 
// components then we write it as high as possible like the App 
// Component and then pass it down as props
// In addition any handlers(cb functions) that change that state, should also
// to be wirtten in the same high component where the state is and the
// handler(function) is also passed down with the state. 


import React from 'react';
import _ from 'lodash';
import WhatsHappen from './Components/whatsHappen';
import data from '../Data';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedView: [data[0], data[1]],
      firstIndexofSelectedView: 0,
    }
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this);
  }

  next(){
    var {selectedView, firstIndexofSelectedView} = this.state;
    if (firstIndexofSelectedView < data.length - 2) {
      selectedView.splice(0,2,data[firstIndexofSelectedView+1],data[firstIndexofSelectedView+2]);
      firstIndexofSelectedView ++;
    } else {
      selectedView
    }
  }


  previous() {
    var {selectedView, firstIndexofSelectedView} = this.state;
    if(firstIndexofSelectedView > data.length + 2) {
      selectedView.splice(0,2,data[firstIndexofSelectedView-1],data[firstIndexofSelectedView-2])
      firstIndexofSelectedView--;
    }else {
      selectedView
    }
  }



  render() {
    var {selectedView} = this.state;
    selectedView = selectedView.map((item, i) => {
      return <WhatsHappen key={i} blog={item} next={this.next} previous={this.previous}/>
    });
  }

    return (
    	<div>
		    {selectedView}
		  </div>
    );
  }
};

export default App;