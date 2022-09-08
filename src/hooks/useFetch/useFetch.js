import { useEffect, useState } from 'react'
import axios from 'axios';
/**custom-hook-yapisi */
function useFetch(url) {

    const [loading, SetLoadin] = useState(true);
    const [error, SetError] = useState(null);
    const [data, setData] = useState([]);

    const fetcData = async () => {

        try {
            const { data: responseData } = await axios.get(url);//parçalayıp isim verdik.hocanın yaptığında buradası Config.API_URL ama o zman veri gelmiyor
            setData(responseData);
            SetLoadin(false);
        } catch (err) {
            SetError(err.message);
            SetLoadin(true);
        }
    }

    useEffect(() => {
        fetcData();
    }, []);

    return { error, loading, data };

}

export default useFetch;