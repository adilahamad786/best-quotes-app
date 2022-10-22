import React from "react";
import { useParams, Routes, Route } from "react-router-dom";
import Comments from '../comments/Comments'

export const QuoteDetail = () => {
  const param = useParams();
  return (
    <div>
      <h1>QuoteDetail</h1>
      { param.quoteId }
      <Routes>
        <Route path='comments' element={<Comments />}/>
      </Routes>
    </div>
  );
};

export default QuoteDetail;
