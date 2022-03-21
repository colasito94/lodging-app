import {useEffect} from "react";
import ReservationsTable from "../Components/ReservationsTable";
import ReservationsViewModel from "../ViewModels/ReservationsViewModel";


function Reservations() {
    const { reservations, getReservations } = ReservationsViewModel();
    useEffect(() => {
        getReservations()
    }, [])

    return (
        <div>
            <h1>Reservations</h1>

            <ReservationsTable reservations={reservations}>
            </ReservationsTable>
        </div>
    );
}

export default Reservations;
