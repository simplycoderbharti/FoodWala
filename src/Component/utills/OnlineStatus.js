import { useEffect, useState } from "react";



const OnlineStatus = () => {
    const [OnlineStatus, setOnlinesStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlinesStatus(false)
        });

        window.addEventListener("online", () => {
            setOnlinesStatus(true)
        });



    }, []);

    return OnlineStatus;
}

export default OnlineStatus