import React from 'react';
import Farmer from './farmer/farmer';
import Crop from './crop/crop';
import Distributors from './distributors/distributors';

function App() {
  return (
    <div className="App">
      <div style={{ margin: '20px' }}>
        {/* <Farmer />  */}
        <Crop />
        {/* <Distributors /> */}
      </div>
    </div>
  );
}

export default App;
