import Container from '../components/Container';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Book = () => {

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const params = useParams();

    const getBookData = async () => {
        const url = `https://api.matgargano.com/api/books/${params.id}`;
        setLoading(true);
        setError(false);
        try {
            const request = await fetch(url);
            const response = await request.json();
            setBook(response);
           
        } catch(e) {
            setError('Error: ' + e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getBookData();
    }, []);

    return (<Container>
        {!error && loading && <Skeleton count="10" />}
        {!error && !loading &&
        <div className="text-center">
        <h2 className="font-bold">{book.title}</h2>
        <img className="rounded mx-auto" src={book.imageURL}/>
        <p>Author: {book.author}</p>
        <p>Publisher: {book.publisher}</p>
        <p>Pages: {book.pages}</p>
        <p>Year: {book.year}</p>
        </div>}
    </Container>)
}

export default Book;