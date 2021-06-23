import React from 'react';
import './style.css';

export default function App() {
  var a = 'sang';
  (() => {
    var a = '1';
  })();
  console.log(a);
  console.log(a);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
