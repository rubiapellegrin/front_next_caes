import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';



export default function Sobre() {

    const [lista, setLista] = useState(['NextJS', 'SSR', 'ISR', 'React']);

    return (
        <div>
            <h1>Sobre o sistema</h1>
            <h2>Desenvolvido com Next.js</h2>
            <ul class="list-group">
                {
                    lista.map((item) => (
                        <li class="list-group-item" key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}