import { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)
// a proper place to define a component
const Statistics = (props) => {
    const { good, neutral, bad } = props
        if (good + neutral + bad === 0) {
            return (
                <div>
                    <p>No feedback given</p>
                </div>
            )
        }
        return (
            <div>
                <div>good {good}</div>
                <div>neutral {neutral}</div>
                <div>bad {bad}</div>
                <div>all {good + neutral + bad}</div>
                <div>average {(good - bad) / (good + neutral + bad)}</div>
                <div>positive {good / (good + neutral + bad) * 100}%</div>
            </div>
        )
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)




    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => setGood(good + 1)} text='good'/>
            <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
            <Button handleClick={() => setBad(bad + 1)} text='bad'/>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>


        </div>
    )
}

export default App