import QuoteList from '../components/quotes/QuoteList';
const DUMMY_DATA = [
    {id : 'q1',author: 'sam', text: 'Learning code is not easy'},
    {id : 'q2',author: 'jhon', text: 'Learning react is fun !'},
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_DATA}/>
};
export default AllQuotes;