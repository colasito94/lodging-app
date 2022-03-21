import {useState} from "react";


function GuestsViewModel() {
    const [guests, setGuests] = useState([]);

    // Retrieve function
    const getGuests = async () => {
        const response = await fetch('/guests');
        const guest_data = await response.json();
        setGuests(guest_data);
    }

    return {
        guests,
        getGuests
    }
}

export default GuestsViewModel;
