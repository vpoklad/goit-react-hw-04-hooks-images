// import './App.css';

import { useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

function App () {
  const [searchQue, setSearchQue] = useState('');
  
  const onFormSubmit = input => {
    setSearchQue(input);
  };

  
    return (
      <div className="App">
        <Searchbar onSubmit={onFormSubmit} />
        <ImageGallery searchQuery={searchQue} />
      </div>
    );
  
};


export default App;
