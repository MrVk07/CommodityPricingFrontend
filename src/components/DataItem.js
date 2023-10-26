import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import EachItem from './EachItem'
import Loading from './Loading'
import { resolveAPI } from '../config'
import { useParams } from 'react-router-dom';

function DataItem() {
    const { item } = useParams();
    const [DataItem, setDataItem] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = useCallback(async () => {
        const url = resolveAPI(item);
        setLoading(true);
        try {
            const response = await axios.get(url);
            setDataItem(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    }, [item]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    return (
        <>
            <div className="container">
                {loading ? <Loading />
                    : <div className="row mx-auto">
                        {DataItem.map((item, i) => {
                            return <div className="col-md-4 mt-3 mb-4 mr-5" key={i}>
                                <EachItem item={item} />
                            </div>
                        })}
                    </div>}

            </div>
        </>
    )
}
export default DataItem