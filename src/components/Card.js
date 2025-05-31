const Card =(props)=> {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={`/images/${props.imgUrl}`}alt="project screenshot" className="img-fluid image" />
                
                <div className="card-body">
                    <h2 className="card-title text-uppercase project-text">{props.name}</h2>
                    <p className="card-text">{props.description}</p>
                    <a href={props.sourceCode} className="btn btn-primary">code</a>
                    <a href={props.livePage} className="btn btn-primary">live</a>
                </div>
            </div>
        </div>
    )
}

export default Card