import {useEffect} from "react";
import HomePageViewModel from "../ViewModels/HomePageViewModel";
import PropertiesTable from "../Components/PropertiesTable";


function HomePage() {
    const { properties, getProperties } = HomePageViewModel();
    useEffect(() => {
        getProperties()
    }, [])

    return (
        <div>
            <h1>Lodging App</h1>

            <PropertiesTable properties={properties}>
            </PropertiesTable>
        </div>
    );
}

export default HomePage;
