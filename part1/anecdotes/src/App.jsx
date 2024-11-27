import { useState } from 'react'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)
// a proper place to define a component
const App = () => {

    // increment the value in position 2 by one
    const points =  new Uint8Array(8);
    const [vote, setVote] = useState(points);

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const setToVote = () => {
        let copy = [...vote]
        copy[selected] += 1
        setVote(copy)
    }

    const maxVote = () => {
        return vote.indexOf(Math.max(...vote))
    }



    return (
        <div>

            <div>
                {anecdotes[selected]}
            </div>
            <div>
                has {vote[selected]} votes
            </div>
            <Button handleClick={() => setToVote()} text='vote'/>
            <Button handleClick={() => setSelected(Math.floor(Math.random() * 8))} text='next anecdotes '/>
            <div>
                {anecdotes[maxVote()]}
            </div>
            <div>
                has {Math.max(...vote)} votes
            </div>

        </div>
    )
}

export default App