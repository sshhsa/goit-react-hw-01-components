import React from 'react';
// import ReactDOM from 'react-dom';

const element = React.createElement('div', { a: 5, b: 10, children: ['Hello world!', 'Hello React!', 'Hello new abilities!'] });
console.log(element);

// ReactDOM.render(element, document.querySelector('#root'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
