import React from 'react';
import './App.css';

function App()
{
    return (
            <div id="quote-box">
              <div className="quote-text-box">
                <i className="fa fa-quote-left"></i>
                <span id="text"></span>
              </div>
              <div className="quote-author-box">- 
                <span id="author"></span>
              </div>
              <div className="buttons-box">
                <a 
                  className="button"
                  id="tweet-quote"
                  title="Tweett this Quote!"
                  target="_top"
                  href="# "
                >
                  <i className="fa fa-twitter"></i> 
                </a>
                <button className="button" id="new-quote">New Quote</button>
              </div>
            </div>
    );
}

export default App