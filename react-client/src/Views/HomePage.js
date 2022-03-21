import {Link} from "react-router-dom";

function HomePage() {
    return (
        <>
            <h1>Lodging App</h1>
            <Link class="link" to="/properties"> Properties Page </Link>
            <Link class="link" to="/hosts"> Hosts Page </Link>
            <Link class="link" to="/guests"> Guests Page </Link>
            <Link class="link" to="/reservations"> Reservations Page </Link>
        </>
    );
}

export default HomePage;
