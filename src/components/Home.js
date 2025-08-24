const Home =()=> {

    return (
        <main className="main" id="homeMain">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="name-text text-capitalize ">about me</h2>
                        <p className="about-text">Hello! I'm <strong>Christopher Jackson,</strong> a junior web developer and recent graduate of Mississippi Coding Academies. I specialize in building responsive, user-friendly web applications using modern technologies such as JavaScript, React, and Node.js. My background includes a 2-year high school program in Simulation and Animation Design, which helped spark my interest in development. I'm eager to continue growing as a developer and contribute to impactful tech projects.</p>
                        <h3 className="h3-heading">Technical Skills</h3>
                        <ul className="mini-text">
                            <li>HTML 5</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>MySQL</li>
                            <li>Node.js</li>
                            <li>Express</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <figure className="headshot-figure">
                            <img src="images/me.jpeg"alt="Christopher Jackson smiling" className="img-fluid image figure-image profile-pic" />
                            
                        </figure>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home