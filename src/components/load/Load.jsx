// src/components/load/Load.jsx
import React, { useEffect, useState } from 'react';
import Loading from '../Loading'; // Mengimpor komponen Loading

const Load = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulasi pemanggilan API
        setTimeout(() => {
            setLoading(false); // Mengubah loading menjadi false setelah 2 detik
        }, 3000); // Tunggu 2 detik
    }, []);

    return (
        <>
            {loading ? <Loading /> : null}
        </>
    );
};

export default Load;
