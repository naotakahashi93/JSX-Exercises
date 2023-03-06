const Person = (props) => {
    const over18 = props.age > 18
    const nameover8 = props.name.length > 8

    return (
    <div>
        <hr></hr>
        <p>Learn some information about this person</p>
        <p> {nameover8 ? props.name.slice(0,6): props.name}</p>
        <h3> {over18 ? "please go vote!": "you must be 18"}</h3>
        <ul>
            {props.hobbies.map(hob => <li>{hob}</li>)}
        </ul>
    </div>
    )
}




const App = () => (
    <div>
        <Person age={20} name="harrypotterr" hobbies={["quiddich", "flying", "butterbeer", "spells"]}/>
        <Person age={3} name="ron" hobbies={["quiddich", "butterbeer", "spells"]} />
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))