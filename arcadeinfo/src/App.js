
// Exercise 1.3

//Code

const App = () => {
    // const-definitions
    const course = 'COMP 227 WEB DEVELOPMENT'
    const handhelds = [
        {
            part0: 'Part 0',
            exercise0: 11
        },
        {
            part1: 'Part 1',
            exercise1: 9
        }
    ]

    return (
        <div>
            <Header course={course} />
            <Content part0={handhelds[0].part0} part1={handhelds[1].part1} part0exercise={handhelds[0].exercise0} part1exercise={handhelds[1].exercise1} />
            <Total part0exercise={handhelds[0].exercise0} part1exercise={handhelds[1].exercise1} />
        </div>
    )
}

const Content = (props) => {

    return (
        <div>
            <Handheld part={props.part0} partexercise={props.part0exercise} />
            <Handheld part={props.part1} partexercise={props.part1exercise} />
        </div>
    )
}

const Total = (props) => {

    return (
        <div>
            <p>There are total {props.part0exercise + props.part1exercise} exercises overall</p>
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
                {props.part} consists {props.partexercise} exercises
            </p>
        </div>
    )
}

export default App