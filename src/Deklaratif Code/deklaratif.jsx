export default function deklaratif() {

    const names = ['ASEP', 'ALEX', 'BAGUS', 'CIKA', 'DONI'];

    return(
        <ol className="text-center">
            {names.map((name, key) => <li key={key}>{name}</li>)}
        </ol>
    );
}