// import './App.css';

import { Component } from 'react/cjs/react.production.min';
import Searchbar from './Searchbar/Searchbar';
const KEY = 'dfsdfsdf';
class App extends Component {
  state = {
    modalShow: false,
    searchQue: ' ',
    pageNumber: 1,
  };

  componentDidMount() {}

  componentDidUpdate() {}

  onFormSubmit = input => {
    this.setState({
      searchQue: input,
      pageNumber: 1,
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
