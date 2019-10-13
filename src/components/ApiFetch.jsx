// rsc
import React from 'react';
import useAxios from 'axios-hooks'

const ApiFetch = () => {
    const [{ data, loading, error }, refetch] = useAxios(
        '0.0.0.0:4242/answer'
    );

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>

    return (
        <div>
            <button onClick={refetch}>refetch</button>
            { data && <pre>{JSON.stringify(data, null, 2)}</pre> }
        </div>
    )
};

export default ApiFetch;
