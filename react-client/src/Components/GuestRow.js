import React from 'react';


function GuestRow({guest}) {
    return (
        <tr>
            <td> {guest.guest_unique_id} </td>
            <td> {guest.name} </td>
            <td> {guest.phone_number} </td>
            <td> {guest.address_of_guest} </td>
            <td> {guest.email} </td>
        </tr>
    );
}

export default GuestRow;
