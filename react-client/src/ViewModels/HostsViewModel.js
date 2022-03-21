import {useState} from "react";


function HostsViewModel() {
    const [hosts, setHosts] = useState([]);

    // Retrieve function
    const getHosts = async () => {
        const response = await fetch('/hosts');
        const host_data = await response.json();
        setHosts(host_data);
    }

    return {
        hosts,
        getHosts
    }
}

export default HostsViewModel;
