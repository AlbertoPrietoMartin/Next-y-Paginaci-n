
'use client';

import { useRouter } from "next/navigation";
import Link from "next/link";

const LaOtra = () => {
    const router = useRouter();

    return (
        <div>
            <Link href="../">Pa atras</Link>
            <p onClick={()=>{
                router.back();
            }}></p>
            
        </div>
        
    );



};





export default LaOtra;