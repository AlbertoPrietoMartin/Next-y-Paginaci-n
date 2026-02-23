'use client'

import { getCharacterById } from "@/app/librerias/api/character";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Character } from "@/app/types";

const LaOtraConId = () =>{
    
    const {id} = useParams();
    const [personaje, setPersonaje] = useState<Character|null>(null);

    useEffect(()=>{
        getCharacterById(Number(id)).then((res)=>{
            setPersonaje(res);
        }), [id];
    })

    return (
        <div>
            <h1>La otra con id y ese id es {id}</h1>
            {personaje&& (
                <>
                    <img src={personaje.image}/>
                    <h2>{personaje.name}</h2>
                </>
            )}
        </div>
    )
};

export default LaOtraConId;