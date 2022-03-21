import {useEffect} from "react";
import PropertiesViewModel from "../ViewModels/PropertiesViewModel";
import PropertiesTable from "../Components/PropertiesTable";


function Properties() {
    const { properties, getProperties } = PropertiesViewModel();
    useEffect(() => {
        getProperties()
    }, [])

    return (
        <div>
            <h1>Properties</h1>

            <PropertiesTable properties={properties}>
            </PropertiesTable>
        </div>
    );
}

export default Properties;
