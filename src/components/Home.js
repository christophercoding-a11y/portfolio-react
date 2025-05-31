const Home =()=> {

    return (
        <main className="main" id="homeMain">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="name-text text-capitalize">about me</h2>
                        <p className="about-text">Hello! My name is Christopher Jackson, but most people call me Chris, I'm a Junior web developer at Mississippi Coding Academies. I enjoy working with computers and I am looking to expand my career options in this field.  From the academy, I have gained more experience in coding and also learned new coding languages. I am a 2020 high school graduate. While attending high school, I completed a 2-year course in Simulation and Animation Design. I enjoy playing videos games and watching TV during my free time.</p>
                        <h3 className="h3-heading">Coding languages or frameworks that I have learned</h3>
                        <ul className="mini-text">
                            <li>HTML 5</li>
                            <li>CSS</li>
                            <li>BOOTSTRAP</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT</li>
                            <li>MYSQL</li>
                            <li>NODE & EXPRESS</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <figure className="headshot-figure">
                            <img src="images/me.jpeg"alt="a picture of me" className="img-fluid image figure-image" />
                            
                        </figure>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home