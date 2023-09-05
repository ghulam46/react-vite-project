/* eslint-disable react/prop-types */
import "../App.css";

export default function ListArray() {

    // const names = ["Pedro", "Jake", "Jessica", "Mike"];
    const users = [
        { name: "Pedro", age: 22 },
        { name: "Jake", age: 25 },
        { name: "Mike", age: 20 }
    ];

    return(
        <div className="App">
            {/* {names.map((name, key) => {
                return <h1 key={key}>{name}</h1>
            })} */}
            
            {users.map((user, key) => {
                return <User name={user.name} age={user.age} key={key}/>;
            })}
        </div>
    );
}

const User = (props) => {
    return(
        <div>
            {props.name} {props.age}
        </div>
    );
}