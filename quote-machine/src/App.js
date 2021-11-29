import React, { useState } from 'react';
import './index.css';
import quotes from './QuoteDB';
import QuoteAndAuthor from './components/QuoteAndAuthor';



function App() {

  const [quote, setQuote] = useState(quotes[0].quote);
  const [author, setAuthor] = useState(quotes[0].author);

   // generate different quote function
  const generateRandomQuote = (arr) => {
    //get random numbers
    const num = Math.floor(Math.random() * quotes.length)

    const newQuote = quotes[num];
    setQuote(newQuote.quote);
    setAuthor(newQuote.author)

    shuffleQuotes(quotes)
  }

   // shuffle quotes function

  const shuffleQuotes = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }


  return (
    <div className="App" id="quote-box">
        <h1 className="text-center">Random Quote</h1>
        <QuoteAndAuthor
          generateRandomQuote={generateRandomQuote}
          quote={quote}
          author={author}
          />
    </div>
  );
}

export default App;
