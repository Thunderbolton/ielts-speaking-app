'use client'

import { useState } from "react"

export default function QuestionsList({ topics }) {

    const [questions, setQuestions] = useState('')

    const onClick = () => {
        setQuestions(!questions)
    }

    
    return (
        <>  
            <div className="questions-toggle">
                 {!questions ? <button onClick={onClick}>Show Questions</button> : <button onClick={onClick}>Hide Questions</button>}
            </div>
            

            {questions &&
                topics.map((topic) => (
                    <div className="border-solid border-2 border-sky-500 w-6/12 m-auto p-2" key={topic.id}>
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

