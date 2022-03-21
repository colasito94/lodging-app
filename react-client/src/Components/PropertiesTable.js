import React from 'react';
import PropertyRow from "./PropertyRow.js";


function PropertiesTable( {properties} ) {
    return (
        <div>
            <table id="exercises">
                <caption> Properties Table </caption>
                <thead>
                    <tr>
                        <th> Property ID </th>
                        <th> Property Name </th>
                        <th> Bedrooms </th>
                        <th> Beds </th>
                        <th> Baths </th>
                        <th> Capacity </th>
                        <th> Price Per Night </th>
                        <th> Style </th>
                        <th> Host ID </th>
                        <th> Street Address </th>
                    </tr>
                </thead>
                <tbody>
                {/*Create property row for each property*/}
                {properties.map((property, i) => <PropertyRow property={property}
                                                              key={i}
                />)}
                </tbody>
            </table>
        </div>
    );
}

export default PropertiesTable;
