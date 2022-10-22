import React from 'react';
import QuoteForm from '../quotes/QuoteForm';
import { useNavigate } from 'react-router-dom';

export const NewQuote = () => {

    const navigate = useNavigate();

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
        navigate('/quotes');
    }

    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    );
};

export default NewQuote;
