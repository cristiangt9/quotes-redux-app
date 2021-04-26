import { useState } from "react";
import { useSelector } from "react-redux";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const quoteId = props.quoteId;
  const items = useSelector((state) => state.quotes.items);
  const comments = items.find(item => item.id = quoteId).comments;
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm quoteId={props.quoteId}/>}
      <CommentsList comments={comments} />
    </section>
  );
};

export default Comments;
