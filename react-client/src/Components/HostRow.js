import React from 'react';


function HostRow({host}) {
    return (
        <tr>
            <td> {host.host_unique_id} </td>
            <td> {host.name} </td>
            <td> {host.phone_number} </td>
            <td> {host.email} </td>
            <td> {host.address_of_host} </td>
        </tr>
    );
}

export default HostRow;
