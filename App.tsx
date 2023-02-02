import * as React from 'react';
import './style.css';

import Tippy from '@tippyjs/react/headless'; // different import path!

const App = () => (
  <Tippy
    interactive
    unmountHTMLWhenHide
    placement="bottom-end"
    render={(attrs) => (
      <div className="box" tabIndex="-1" {...attrs}>
        My tippy box
      </div>
    )}
  >
    <button>My button</button>
  </Tippy>
);

export default App;
