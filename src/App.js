// import './App.css';

import { Component } from 'react/cjs/react.production.min';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
  state = {
    searchQue: ' ',
  };

  componentDidMount() {}

  componentDidUpdate() {}

  onFormSubmit = input => {
    this.setState({
      searchQue: input,
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery searchQuery={this.state.searchQue} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
