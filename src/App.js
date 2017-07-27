import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const posts = [
    { id: 1, likes: [] },
    { id: 2, likes: ['Peter'] },
    { id: 3, likes: ['John', 'Mark'] },
    { id: 4, likes: ['Paul', 'Lilly', 'Alex'] },
    { id: 5, likes: ['Sarah', 'Michelle', 'Alex', 'John'] }
];

class App extends Component {
    constructor(props) {
        super(props);

        this.arrayToPhrase = this.arrayToPhrase.bind(this);
        this.runPhraser = this.runPhraser.bind(this);
    }
    arrayToPhrase(arr, options) {
        if (!Array.isArray(arr)) {
            throw new TypeError(String(arr) + ' is not an array. Expected an array.');
        }
        options = options || {};
        function checkOption(optionName) {
            if (typeof options[optionName] !== 'string') {
                throw new TypeError(
                    String(options[optionName]) +
                    ' is not a string. ' +
                    '`' + optionName + '` option must be a string.'
                );
            }
        }
        if (options.sep === undefined) {
            options.sep = ', ';
        } else {
            checkOption('sep');
        }
        if (options.lastSep === undefined) {
            options.lastSep = ' and ';
        } else {
            checkOption('lastSep');
        }
        if (arr.length === 0) {
            return '';
        }
        if (arr.length === 1) {
            return arr[0];
        }
        return arr.slice(0, -1).join(options.sep) + options.lastSep + arr[arr.length - 1];
    };

    runPhraser(post) {
        if(!post.likes || post.likes.length == 0) {
            return "No one likes this";
        } else {
            let phrase = this.arrayToPhrase(post.likes)
            return `${phrase} like this.`;
        }
    }

    render() {
        const that = this;
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to Yohai Ararat</h2>
            </div>
                <p className="App-intro">Based on the facebook create-react-app starter app</p>
                <p>In here we will turn the data of this object:</p>
                <div className="code-block">{posts.map(function(post){
                    return <p>id: {post.id}, likes: {JSON.stringify(post.likes)}</p>
                })}</div>
                <p>into a phrase depending on the content of the array.</p>
                <p>Here are the results:</p>
                <div className="code-block">
                  {posts.map(function(post){
                      return <p>id: {post.id}, text: {that.runPhraser(post)}</p>
                  })}
                </div>
          </div>
        );
    }
}

export default App;
