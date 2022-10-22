import React from 'react';
import QuoteForm from '../quotes/QuoteForm';

export const NewQuote = () => {

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
    }

    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    );
};

export default NewQuote;
