import React from 'react'
import quotes from '../QuoteDB'

export default function QuoteAndAuthor(props) {

    const { quote, author, generateRandomQuote } = props;
    return (
        <div className="card" id="text">

            <div className="card-body">
                <p className="card-text" id="quote">{quote}</p>
                <h5 className="card-title" id="author">- {author}</h5>
                <button
                    id="new-quote"
                    onClick={() => { generateRandomQuote(quotes) }}
                    type="submit">
                    <i class="fas fa-mouse"></i> New Quote</button>
                <a
                    id="tweet-quote"
                    className="ml-3"
                    href={"https://twitter.com/intent/tweet/?text=" + encodeURIComponent(quote + '--' + author)}
                    target="_blank"
                    onClick={() => {
                        generateRandomQuote(quotes);
                    }}
                    type="submit"><i class="fab fa-twitter"></i> Share Quote</a>
            </div>
        </div>
    )
}