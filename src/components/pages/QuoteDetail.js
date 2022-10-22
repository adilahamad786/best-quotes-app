import React from "react";
import { useParams, Routes, Route } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "p1", author: "Adil Ahamad", text: "Time is very less!" },
  { id: "p2", author: "Adil Ahamad", text: "Mast raho suwast raho!" },
];

export const QuoteDetail = () => {
  const param = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === param.quoteId);

  if (!quote) {
    return <p>Quote not found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route path="comments" element={<Comments />} />
      </Routes>
    </>
  );
};

export default QuoteDetail;
