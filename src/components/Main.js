import { useState, useEffect, } from 'react'

import data from '../data'

import Card from "./Card"

const Main =()=> {
    const cardComponents = data.map(obj => {
        return (
            <Card
                key={obj.id}
                name={obj.name}
                imgUrl={obj.imgUrl}
                description={obj.description}
                sourceCode={obj.sourceCode}
                livePage={obj.livePage}
            />
        )
    })

    const [ projects, setProjects] = useState([])

    useEffect(()=> {
        setProjects(data)
    }, [])



    return (
        <main className="main">
            <div className="container px-3">
                <h2 className="text-capitalize title text-center mb-4">my projects</h2>
                <section className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
                    { cardComponents }
                </section>
            </div>
        </main>
    )
}

export default Main