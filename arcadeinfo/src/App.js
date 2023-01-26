const App = () => {
    // const-definitions
    const company = "University of the Pacific"


    return (
        <div>
            <Header company={company} />
            <Content />
            <Total />
        </div>
    )
}

const Content = () => {
    const name1 = 'Game Boy'
    const name2 = 'Game Boy Advance'
    const name3 = 'DS'
    const course1 = 1046
    const course2 = 1538
    const course3 = 1791

    return (
        <div>
            <Handheld name={name1} course={course1} />
            <Handheld name={name2} course={course2} />
            <Handheld name={name3} course={course3} />
        </div>
    )
}

const Total = () => {
    const course1 = 1046
    const course2 = 1538
    const course3 = 1791

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
