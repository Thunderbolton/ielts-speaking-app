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
                    <div className="border-solid border-2 border-[#007984] w-6/12 m-auto p-2 my-3 text-[#003c42] bg-[#eef9fb] text-center" key={topic.id}>
                        <h1 className="text-1xl text-gray-600 font-bold my-2 py-1 title">{topic.title}</h1>
                        <h3 className="[font-size:_clamp(0.9em,1.5vw,1.2em)]">{topic.subtitle}</h3>

                        {topic.questions.map((question, index) =>
                            <p key={index} className="[font-size:_clamp(0.9em,1.5vw,1.2em)] text-center leading-10">{question}</p>
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

