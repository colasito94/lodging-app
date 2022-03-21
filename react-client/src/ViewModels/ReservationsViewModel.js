import {useState} from "react";


function ReservationsViewModel() {
    const [reservations, setReservations] = useState([]);

    // Retrieve function
    const getReservations = async () => {
        const response = await fetch('/reservations');
        const reservations_data = await response.json();
        setReservations(reservations_data);
    }

    return {
        reservations,
        getReservations
    }
}

export default ReservationsViewModel;
