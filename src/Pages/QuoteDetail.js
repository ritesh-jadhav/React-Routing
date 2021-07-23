import { useParams,Route } from "react-router";
import Comments from '../components/comments/Comments';
const QuoteDetail = () => {
  const param = useParams();
  return (
    <div>
      <h1> Quotes details Page</h1>
      <p>{param.quoteId}</p>
      <Route path={`/quotes/${param.quoteId}/comments`}>
          <Comments/>
      </Route>
    </div>
  );
};
export default QuoteDetail;
