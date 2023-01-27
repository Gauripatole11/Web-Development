const App = () => {
    // const-definitions
    const company = 'Nintendo'
    const handheld1 = {
        name: 'Game Boy',
        games: 1046
    }
    const handheld2 = {
        name: 'Game Boy Advance',
        games: 1538
    }
    const handheld3 = {
        name: 'DS',
        games: 1791
    }

    return (
        <div>
            <Header company={company.name} />
            <Content handheld1={handheld1} handheld2={ handheld2} handheld3={handheld3}/>
            <Total Handheld={Handheld} />
        </div>
    )
}

const Content = (props) => {
    console.log(props)
    const name1 = 'CS Students'
    const name2 = 'BA Students'
    const name3 = 'Finance Students'
    const course1 = 100
    const course2 = 200
    const course3 = 300

    return (
        <div>
            <Handheld name={name1} course={course1} />
            <Handheld name={name2} course={course2} />
            <Handheld name={name3} course={course3} />
        </div>
    )
}

const Total = () => {
    const course1 = 100
    const course2 = 200
    const course3 = 300

    return (
        <div>
            <p>Number of courses {course1 + course2 + course3}</p>
        </div>
    )
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.company}</h1>
        </div>
    )
}

const Handheld = (props) => {
    return (
        <div>
            <p>
                {props.name} {props.course}
            </p>
        </div>
    )
}

export default App
