import React, {Component} from 'react';
import FormGroup from 'react-bootstrap/FormGroup'; 
import FormControl from 'react-bootstrap/FormLabel';

class App extends Component {
  
  render() {
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlsTextarea">
            <div>Markdown Input</div>
            <FormControl componentClass="textarea" placeholder="Enter markdown">

            </FormControl>
          </FormGroup>
        </div>
      </div>
    );
  }
}

export default App;
