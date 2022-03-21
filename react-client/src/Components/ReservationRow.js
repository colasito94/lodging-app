import React from 'react';


function ReservationRow({reservation}) {
    return (
        <tr>
            <td> {reservation.reservation_unique_id} </td>
            <td> {reservation.guest_unique_id} </td>
            <td> {reservation.property_unique_id} </td>
            <td> {reservation.date_arrive} </td>
            <td> {reservation.date_leave} </td>
            <td> {reservation.guest_amount} </td>
            <td> {reservation.total_price} </td>
        </tr>
    );
}

export default ReservationRow;
