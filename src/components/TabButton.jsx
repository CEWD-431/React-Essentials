export default function TabButton (props) {
    function clickHandler () {
        console.log("Hello World!");
    }
    return <div><button onClick={clickHandler}>{props.children}</button></div>
}