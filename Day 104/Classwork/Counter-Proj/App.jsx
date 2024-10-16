
function Counter() {
    const [clintEastwood, setClintEastwood] = useState(0);
    console.log(clintEastwood);

    return(
        <button onClick={() => setClintEastwood(clintEastwood + 1)}>+1</button>
    )
}

export default Counter;