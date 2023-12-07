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

            {questions &&
                topics.map((topic) => (
                    <div key={topic.id}>
                        <h1 className="text-1xl text-gray-900 font-bold my-2 py-1">{topic.title}</h1>
                        <h3>{topic.subtitle}</h3>

                        {topic.questions.map((question, index) =>
                            <p key={index}>{question}</p>
                        )}
                    </div> 
                ))   
            }
        </>
    )
}
  {/* {topics[0].data[0].questions.map((question, index) =>
                        <p key={index}>{question}</p>
                    // )} 
                    // This works, but just put each question on a separate line


                    {/* <h1>{topics[0].data[0]}</h1> */}                    
                    
                    {/* <p>{topics[0].data[0].questions}</p> */}

