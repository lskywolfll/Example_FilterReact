import React, { useState, useEffect } from 'react'

const datos = ["Pepito", "Juanito", "Robert"]

function filter() {

    const [filter, setFilter] = useState([]);

    return (
        <div>

            <input placeholder="Ingresa un nombre para filtrar" type="text" onChange={(e) => {
                e.preventDefault();

                let valor = e.target.value;

                console.log(valor);
                console.log(datos.filter(texto => texto.includes(valor)))

                setFilter(datos.filter(texto => texto.includes(valor)));
            }}/>

            <ul>
                {datos.map((valor, posicion) => (
                    <li key={posicion}>{valor}</li>
                ))}
            </ul>

            <h1>Filtrado</h1>

            {filter.length >= 1 && (
                  <ul>
                  {filter.map((valor, posicion) => (
                      <li key={posicion}>{valor}</li>
                  ))}
              </ul>
            )}
        </div>
    )
}

export default filter
