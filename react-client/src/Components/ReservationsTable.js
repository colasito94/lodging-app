import ReservationRow from "./ReservationRow";


function ReservationsTable( {reservations} ) {
    return (
        <div>
            <table id="reservations">
                <caption> Reservations Table </caption>
                <thead>
                <tr>
                    <th> Reservation ID </th>
                    <th> Guest Unique ID </th>
                    <th> Property Unique ID </th>
                    <th> Check In </th>
                    <th> Check Out </th>
                    <th> Number of Guests </th>
                    <th> Total Price </th>
                </tr>
                </thead>
                <tbody>
                {reservations.map((reservation, i) => <ReservationRow reservation={reservation} key={i}
                />)}
                </tbody>
            </table>
        </div>
    );
}

export default ReservationsTable;
