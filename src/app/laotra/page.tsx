
'use client';

import { useRouter } from "next/navigation";

const LaOtra = () => {
    const router = useRouter();

    return (
        <div>
            <h1>Esto es la otra pagina</h1>
            <p onClick={()=>{
                router.back();
            }}>pa atras</p>
        </div>
    );
};

export default LaOtra;