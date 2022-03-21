import {useEffect} from "react";
import HostsViewModel from "../ViewModels/HostsViewModel";
import HostsTable from "../Components/HostsTable";


function Hosts() {
    const { hosts, getHosts } = HostsViewModel();
    useEffect(() => {
        getHosts()
    }, [])

    return (
        <div>
            <h1>Hosts</h1>

            <HostsTable hosts={hosts}>
            </HostsTable>
        </div>
    );
}

export default Hosts;
