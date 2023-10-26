import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EachItem from './EachItem'
import Loading from './Loading'
import { resolveAPI } from '../config'
import { useParams } from 'react-router-dom';

function DataItem() {
    const { item } = useParams();
    const [DataItem, setDataItem] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const url = resolveAPI(item)
        setLoading(true);
        axios.get(url).then((resp) => resp.data).then((data) => {
            setDataItem(data)
            setLoading(false)
        })
    }, [item])

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