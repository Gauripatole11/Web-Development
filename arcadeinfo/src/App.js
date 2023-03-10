const App = () => {
    // const-definitions
    const course = 'COMP 227'
    const handhelds = [
        {
            part: 'Part 0',
            exercise: 9
        },
        {
            part: 'Part 1',
            exercise: 5
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content handhelds={handhelds} />
            <Total handhelds={handhelds} />
        </div>
    )
}

const Content = (props) => {

    return (
        <div>
            <Handheld part={props.handhelds[0].part} partexercise={props.handhelds[0].exercise} />
            <Handheld part={props.handhelds[1].part} partexercise={props.handhelds[1].exercise} />
        </div>
    )
}

const Total = (props) => {

    return (
        <div>
            <p>There are total {props.handhelds[0].exercise + props.handhelds[1].exercise} exercises</p>
        </div>
    )
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Handheld = (props) => {
    return (
        <div>
            <p>
                {props.part} has {props.partexercise} exercises
            </p>
        </div>
    )
}

export default App