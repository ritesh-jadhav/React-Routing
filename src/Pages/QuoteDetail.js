import { useParams, Route } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_DATA = [
  { id: "q1", author: "sam", text: "Learning code is not easy" },
  { id: "q2", author: "jhon", text: "Learning react is fun !" },
];

const QuoteDetail = () => {
  const param = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === param.quoteId);
  if (!quote) {
    return <p>No quote found...</p>;
  }
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};
export default QuoteDetail;
