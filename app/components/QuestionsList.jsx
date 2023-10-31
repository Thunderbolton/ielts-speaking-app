'use client'

import { useState } from "react"

export default function QuestionsList({ topics }) {
    
    const [questions, setQuestions] = useState('')

    const onClick = () => {
    setQuestions(!questions)
  }

    return (
        <>
            {!questions ? <button onClick={onClick}>SHOW QUESTIONS</button> : <button onClick={onClick}>HIDE QUESTIONS</button>}

            {questions ?
                topics.map((topic) => (
                    <div key={topic.id}>
                    <h1>{topic.title}</h1>
                    <p>{topic.questions.join(' ')}</p>
                    </div> 
                )) : null
            }
        </>
    )
}
