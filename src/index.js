import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {OBJModel} from 'react-3d-viewer'
import {NextBox, StorageApi} from 'next-box';

const nb = new NextBox();
const api = new StorageApi();

nb.init((state) => {
  api.changeState(state)


  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(
    <React.StrictMode>
      <OBJModel 
        position={{x:0,y:-100,z:0}} 
        src={api.makeDownloadPath(state.storage.path)} 
        width={document.body.offsetWidth} 
        height={document.body.offsetHeight}
      />
    </React.StrictMode>
  );
})