// this is a test file. I am learning how to use react and these are some exercices I'm doing to understand the concepts.
// this is a app.js file to explain the concept of effect hooks

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) => {
    setThoughts((thoughts) => [thought, ...thoughts]);
  };

  const removeThought = (thoughtIdToRemove) => {
    setThoughts((thoughts) => 
      thoughts.filter((thought) => thought.id !== thoughtIdToRemove)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought}/>
          ))}
        </ul>
      </main>
    </div>
  );
}


// Here's the AddThoughtForm component:

import { React, useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
    // state to store the text of the thought
    const [text, setText] = useState('');

    // function to handle the text change
    const handleTextChange = (event) => {
        setText(event.target.value);
    };
    
    // function to handle the form submission
    const handleSubmit = (event) => {
        event.preventDefault();  // Always prevent default
        if (text.length > 0) {  // Only add thought if text isn't empty
            props.addThought({
                id: generateId(),
                text: text,
                expiresAt: getNewExpirationTime(),
            });
            setText('');  // Clear input after successful submission
        }
    }

    // function to handle the form submission
    return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
        <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text} // Connect the value to the state
        onChange={handleTextChange} // Connect change to the state
        />
        <input type="submit" value="Add" />
    </form>
  );
}


// Here's the utilities.js file:

export function getNewExpirationTime() {
    return Date.now() + 15 * 1000;
  }
  
let nextId = 0;

export function generateId() {
    const result = nextId;
    nextId += 1;
    return result;
  }

// Here's the Thought component:

import { React, useState, useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, timeRemaining);

    return () => clearTimeout(timeout);
  }, [thought, removeThought]);

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
