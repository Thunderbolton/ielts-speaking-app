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
                       
                        {/* <h1 className={topic.name ? "heading-lg outline-text border-b-2 border-[#007984] text-[#eef9fb]": 'text-[#eef9fb]'}>{topic.name}</h1> */}


                        <h1 className="heading-lg outline-text mb-2 border-b-2 border-[#007984] text-[#eef9fb]">{topic.title}</h1>
                        
                        <div className="border-solid border-2 border-[#007984] rounded bg-[#eef9fb] p-2">
                            <h1 className={topic.prompt ? "heading-md outline-text border-solid border-2 border-[#007984] rounded bg-[#007984] text-[#eef9fb]" : ''} >{topic.prompt}</h1>
                            <h3 className="[font-size:_clamp(1em,1.6vw,1.3em)] font-bold">{topic.subtitle}</h3>
                            {topic.questions.map((question, index) =>
                                <p key={index} className="[font-size:_clamp(1em,1.6vw,1.3em)] text-center leading-[3rem]">{question}</p>
                                
                            )}                            
                        </div>
                    </div> 
                ))   
            }
        </>
    )
}

