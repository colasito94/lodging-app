import {useState} from "react";


function HomePageViewModel() {
    const [properties, setProperties] = useState([]);  // useState adds React state to components

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

export default HomePageViewModel;
