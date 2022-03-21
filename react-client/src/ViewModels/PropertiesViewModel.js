import {useState} from "react";


function PropertiesViewModel() {
    const [properties, setProperties] = useState([]);

    // Retrieve function
    const getProperties = async () => {
        const response = await fetch('/properties');
        const properties_data = await response.json();
        setProperties(properties_data);
    }

    return {
        properties,
        getProperties
    }
}

export default PropertiesViewModel;
