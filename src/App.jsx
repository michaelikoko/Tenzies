import React from "react"
import "./style.css"
import Die from "./components/Die"
import Confetti from "react-confetti"
import Footer from "./components/Footer"

export default function App() {
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [rolls, setRolls] = React.useState(0)
    const [lowestRolls, setLowestRolls] = React.useState(localStorage.getItem("lowestRolls") || 0)

    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) setTenzies(true)
    }, [dice])

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: i
            })
        }
        return newDice
    }

    function rollDice() {
        if (tenzies) {
            if (lowestRolls === 0 || (rolls < lowestRolls && rolls !== 0)) {
                localStorage.setItem("lowestRolls", rolls)
                setLowestRolls(rolls)
            }
            setDice(allNewDice())
            setTenzies(false)
            setRolls(0)
        }
        else {
            setRolls(oldValue => oldValue + 1)
            setDice(oldDice => oldDice.map((die, index) => {
                return die.isHeld ? die : { value: Math.ceil(Math.random() * 6), isHeld: false, id: index }
            }))
        }

    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? { ...die, isHeld: !die.isHeld } : die
        }))
    }

    const diceElements = dice.map((die) => {
        return <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
        />
    })
    return (
        <section>
            <main>
                {tenzies && <Confetti />}
                <h1 className="title">Tenzies</h1>
                <p className="instructions">
                    Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
                </p>
                <div className="scores">
                    <p>Rolls: <span>{rolls}</span></p>
                    <p>Lowest Rolls: <span>{lowestRolls}</span></p>
                </div>
                <div className="dice-container">
                    {diceElements}
                </div>
                <button onClick={rollDice} className="roll-dice">{tenzies ? "New Game" : "Roll"}</button>
            </main>
            <Footer />
        </section>
    )
}