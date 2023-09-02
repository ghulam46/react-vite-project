import "./App.css";

export default function ListArray() {

    const names = ["Pedro", "Jake", "Jessica", "Mike"];

    return(
        <div className="App">
            {names.map((name, key) => {
                return <h1 key={key}>{name}</h1>
            })}
        </div>
    );
}