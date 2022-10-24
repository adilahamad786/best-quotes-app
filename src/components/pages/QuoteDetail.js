import React, { useEffect } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

export const QuoteDetail = () => {
  const { quoteId } = useParams();
  
  const { sendRequest, status, data : loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  }

  if (error) {
    return <p className='centered focused'>{error}</p>
  }

  if (!loadedQuote.text) {
    return <p>Quote not found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route path="" element={
          <div className="centered">
          <Link className="btn--flat" to="comments">Load Comments</Link>
          </div>
        } />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </>
  );
};

export default QuoteDetail;
