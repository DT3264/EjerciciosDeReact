import { clear } from '@testing-library/user-event/dist/clear';
import React, { useEffect, useState } from 'react';
export default function FunctionHook() {
    const [count, setCount] = useState(0);
    const [str, setStr] = useState("a");
    useEffect(() => {
        // Este código corre 
        // *cuando el componente se monta
        // *cada que el count cambia 
        // (ya que al actualizar el estado, el componente se desmonta y se monta de nuevo)
        console.log(`Efecto del count. Count: ${count}`)
        return () => {
            // Este código sólo se ejecutará cuando el componente sea removido
            console.log(`Desmontado por cambio en el count. Count: ${count}`);
        }
        // La lista puede recibir de 0 a N valores o dependencias
        // cada que un valor definido en la lista cambie, se ejecutará el efecto secundario
    }, [count])

    // Este efecto se ejecuta cuando el componente se monta inicialmente
    // y el return se ejecuta cuando el componente se desmonta 
    // (el padre del componente cambia el componente por el Timer, el TODO, etc.)
    useEffect(() => {
        console.clear();
        console.log("Efecto del componente")
        return () => {
            console.log("Desmontado por cambio global");
        }
    }, [])

    return (
        <>
            <p>
                Permite reaccionar al ciclo de vida de la interfaz así como reaccionar de distinta manera dependiendo de qué haya disparado el cambio
            </p>
            <button onClick={() => setCount(count + 1)}>{count}</button><br />
            <button onClick={() => setStr(str + "a")}>{str}</button>
        </>
    )
}