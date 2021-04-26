import React from "react";
import { useSelector } from "react-redux";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import NotFound from "./NotFound";

const Quote = () => {
  const match = useRouteMatch();
  const params = useParams();
  const items = useSelector((state) => state.quotes.items);
  const quote = items.find((item) => item.id === params.quoteId);
  console.log(params.quoteId, items);

  if (!quote) return <NotFound />;

  return (
    <>
      <HighlightedQuote quote={quote} />
      {/* <Route path={`/quotes/${params.quoteId}`} exact> */}
      <Route path={match.path} exact>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`${match.path}/comments`}
          >
            See comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments quoteId={params.quoteId} />
      </Route>
    </>
  );
};

export default Quote;
