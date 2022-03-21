import HostRow from "./HostRow";


function HostsTable( {hosts} ) {
    return (
        <div>
            <table id="hosts">
                <caption> Hosts Table </caption>
                <thead>
                <tr>
                    <th> Host ID </th>
                    <th> Host Name </th>
                    <th> Phone Number </th>
                    <th> E-mail </th>
                    <th> Host Address </th>
                </tr>
                </thead>
                <tbody>
                {hosts.map((host, i) => <HostRow host={host} key={i}
                />)}
                </tbody>
            </table>
        </div>
    );
}

export default HostsTable;
