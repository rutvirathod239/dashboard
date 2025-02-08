import { useEffect, useState } from "react"
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get(url);
            if (response.status === 200 || response.status === 201) {
                setData(response.data);
            }
            setLoading(false);
        }
        fetchData();
    },[]);
    return { data, error, loading };
}
export default useFetch;