
import 'bootstrap/dist/css/bootstrap.css';

function ISR({ caes }) {
    return (
        <div>
            <h1>Aprendendo NextJS - ISR</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Cliente</th>
                        <th>Peso</th>
                        <th>Raça</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        caes.map(obj => (
                            <tr key={obj.codigo}>
                                <td>{obj.codigo}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.cliente}</td>
                                <td>{obj.peso}</td>
                                <td>{obj.nomeraca}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ISR;

export async function getStaticProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/caes`);
    const caes = await res.json();

    return {
        props: {
            caes
        }, revalidate: 30
    }
}