import axios from "axios";
import { useEffect, useState } from "react";

function SteamPage() {
    const [steam, setSteam] = useState([]);

useEffect(() => {
function fetchSteamGames() {
    axios.get("https://www.cheapshark.com/api/1.0/deals")
    .then((res) => {
        console.log(res);
        setSteam(res.data);
    })
    .catch((err) => {
        console.error("Error fetching Steam games:", err);
    });
}

fetchSteamGames();
}, []);

}
export default SteamPage;