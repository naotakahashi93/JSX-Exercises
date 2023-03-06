const Tweet = (props) => (
    <div>
        <hr></hr>
        <p> {props.message}</p>
        <small>{props.username}</small>
        <br></br>
        <small>{props.user}</small>
        <br></br>
        <small>{props.date}</small>
        <hr></hr>
    </div>
)


const App = () => (
    <div>
        <Tweet message="First Tweet" username="tai123" user="Tai" date="02/14/2023"/>
        <Tweet message="Another Tweet!" username="gracy123" user="Gracy" date="02/17/2023"/>
        <Tweet message="Final Tweet!" username="moco123" user="Moco" date="02/20/2023"/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))