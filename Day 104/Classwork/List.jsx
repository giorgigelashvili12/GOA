
function List() {
    const experience = ['Python', 'Javascript'];

    // use state
    const [click, setClick] = useState(0); // let - NEVER

    console.log(click);
    // let counter = 0;
    setClick(1)

    return(
        <>
            <h1>Hello From React!</h1>
            <ul>
                {experience.map((item, index) => {
                    return <li key={`_experience-${index}`}>{ item }</li>;
                })}
            </ul>

            <div>{click}</div>
            <button onClick={() => setClick(click + 1)}></button>
        </>
    );
}

export default List;