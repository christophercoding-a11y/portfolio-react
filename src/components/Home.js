const Home =()=> {

    return (
        <main className="main" id="homeMain">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="name-text text-capitalize ">about me</h2>
                        <p className="about-text">Hello! I'm <span className="name">Christopher Jackson</span>, a Junior Web Developer and recent graduate of Mississippi Coding Academies. I’ve gained experience in developing responsive, user-friendly web applications using modern technologies such as JavaScript, React, and Node.js. My background includes a two-year high school program in Simulation and Animation Design, which sparked my interest in development. I'm eager to continue growing as a developer and contribute to impactful tech projects.</p>
                        <h3 className="h3-heading">Technical Skills</h3>
                        <ul className="mini-text list-unstyled">
                            <li><span className="skill-category">Frontend:</span>HTML, CSS, Bootstrap, JavaScript, React</li>
                            <li><span className="skill-category">Backend:</span>Node.js, Express</li>
                            <li><span className="skill-category">Database:</span>MySQL</li>
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