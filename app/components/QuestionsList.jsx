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
                    <div className="border-solid border-2 border-[#007984] rounded w-6/12 m-auto p-3 my-8 text-[#007984] bg-[#99c9cd] text-center" key={topic.id}>
                       
                        <h1 className={topic.name ? "heading-lg outline-text border-b-2 border-[#007984] text-[#eef9fb]": 'text-[#eef9fb]'}>{topic.name}</h1>


                        <h1 className="heading-md outline-text">{topic.title}</h1>
                        <div className="border-solid border-2 border-[#007984] rounded bg-[#eef9fb] p-2">

                            <h3 className="[font-size:_clamp(0.9em,1.5vw,1.2em)]">{topic.subtitle}</h3>
                            {topic.questions.map((question, index) =>
                                <p key={index} className="[font-size:_clamp(0.9em,1.5vw,1.2em)] text-center leading-10">{question}</p>
                                
                            )}                            
                        </div>

                    </div> 
                ))   
            }
        </>
    )
}

