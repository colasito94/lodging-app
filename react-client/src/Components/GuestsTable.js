import GuestRow from "./GuestRow";


function GuestsTable( {guests} ) {
    return (
        <div>
            <table id="hosts">
                <caption> Guests Table </caption>
                <thead>
                <tr>
                    <th> Guest ID </th>
                    <th> Guest Name </th>
                    <th> Phone Number </th>
                    <th> Guest Address </th>
                    <th> E-mail </th>
                </tr>
                </thead>
                <tbody>
                {guests.map((guest, i) => <GuestRow guest={guest} key={i}
                />)}
                </tbody>
            </table>
        </div>
    );
}

export default GuestsTable;
