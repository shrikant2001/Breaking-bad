import React from 'react';
import { useSelector } from 'react-redux';
import './Quotes.css';

const Quotes = () => {

  const quotes = useSelector((state) => state.data.quotes);
  console.log(quotes);
  return (
    <div>
      <div className="title display-6 ">POPULAR QUOTES</div>
      <div className="quotes">
      {quotes.map((q) => {
        return(
          <div className="card" key={q.id}>
            <h5 className='quote font-italic'> "{q.quote}"</h5>
            <h6 className='author fw-b'>{q.author}</h6>
          </div>
        )
      })}
      </div>
      
    </div>
  );
}

export default Quotes;
