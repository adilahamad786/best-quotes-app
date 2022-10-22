import React from 'react';
import QuoteList from '../quotes/QuoteList';

const DUMMY_QUOTES = [
    { id : 'p1', author : "Adil Ahamad", text : "Time is very less!"},
    { id : 'p2', author : "Adil Ahamad", text : "Mast raho suwast raho!"}
];

export const AllQuotes = () => {
  return (
    <QuoteList quotes={ DUMMY_QUOTES } />
  );
};

export default AllQuotes;
