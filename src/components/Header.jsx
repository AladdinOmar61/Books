import Container from './Container';
import {NavLink as RouterLink} from 'react-router-dom';

const Header = () => {

    const getClassName = props => {
        return `${props.isActive ? 'font-bold' : ''} hover:underline hover:text-gray-600 transition duration-300 `
    }

    return <Container className="bg-gray-300">
        <nav className="flex gap-20" aria-label="breadcrumb">
            <RouterLink className={`${getClassName} "breadcrumb-item active`} aria-current="/" to="/">Home</RouterLink>
            <RouterLink className={`${getClassName} "breadcrumb-item active`} aria-current="about" to="/about">About</RouterLink>
            <RouterLink className={`${getClassName} "breadcrumb-item active`} aria-current="books" to="/books">Books</RouterLink>
        </nav>
    </Container>
}

export default Header;