// App.js
import React, { useEffect, useState } from 'react';
import Load from './components/load/Load';

const App = () => {
    const [load, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        // Simulasi pemanggilan API
        setTimeout(() => {
            setData({ message: "Data berhasil dimuat!" });
            setLoading(false);
        }, 2000); // Tunggu 2 detik
    }, []);

    return (
        <div>
            {load ? (
                <Load />
            ) : (
                <div>
                    <h1>{data.message}</h1>
                </div>
            )}
        </div>
    );
};

export default App;
