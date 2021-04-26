import React from "react";
import { useDispatch } from "react-redux";
import { useHistory,  } from "react-router-dom";
import { addQuote } from "../../store/actions";
import QuoteForm from "../quotes/QuoteForm";

const AddQuote = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const [sended, setSended] = useState(false);
  const addQuoteHandler = (form) => {
    dispatch(addQuote(form));
    // setSended(true);
    history.push('/quotes');
  };
  // if (sended) {
  //   return <Redirect to="/" />;
  // }
  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default AddQuote;
