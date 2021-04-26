import React from "react";
import { useSelector } from "react-redux";
import NoQuotesFound from "../quotes/NoQuotesFound";
import QuoteList from "../quotes/QuoteList";

const Quotes = () => {
  const quotes = useSelector((state) => state.quotes.items);
  return (
    <div>
      {quotes.length ? <QuoteList quotes={quotes} /> : <NoQuotesFound />}
    </div>
  );
};

export default Quotes;
