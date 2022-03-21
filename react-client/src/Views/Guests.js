import {useEffect} from "react";
import GuestsViewModel from "../ViewModels/GuestsViewModel";
import GuestsTable from "../Components/GuestsTable";

function Hosts() {
    const { guests, getGuests } = GuestsViewModel();
    useEffect(() => {
        getGuests()
    }, [])

    return (
        <div>
            <h1>Guests</h1>

            <GuestsTable guests={guests}>
            </GuestsTable>
        </div>
    );
}

export default Hosts;
