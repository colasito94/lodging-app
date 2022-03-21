import React from 'react';


function PropertyRow({property}) {
    return (
        <tr>
            <td> {property.property_unique_id} </td>
            <td> {property.property_name} </td>
            <td> {property.bedroom_amount} </td>
            <td> {property.bed_amount} </td>
            <td> {property.bath_amount} </td>
            <td> {property.capacity} </td>
            <td> {property.price_per_night} </td>
            <td> {property.style} </td>
            <td> {property.host_unique_id} </td>
            <td> {property.street_address_property} </td>
        </tr>
    );
}

export default PropertyRow;
