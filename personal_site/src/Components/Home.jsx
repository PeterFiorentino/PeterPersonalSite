import React from 'react';
import logo from '../transparentLogo.png'





class Home extends React.Component{
    constructor(){
        super()
        this.state = {
       
        }
    }

    render() {
        return (
            <div id="home-page">
                <header><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"></link></header>
                <div>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div id="skills">
                        <div className="eachSkill1" id="javascript">
                            <i class="devicon-javascript-plain colored" ></i>
                            <p className="skillP">Javascript  </p>
                        </div>
                        <div className="eachSkill1" id="react">
                            <i class="devicon-react-original colored" ></i> 
                            <p className="skillP">React  </p>
                        </div>
                        <div className="eachSkill1" id="html">
                            <i class="devicon-html5-plain colored" ></i>
                            <p className="skillP">HTML  </p>
                        </div>  
                        <div className="eachSkill1" id="css">
                            <i class="devicon-css3-plain colored" ></i>
                            <p className="skillP">CSS  </p>
                        </div>  

                        <div className="eachSkill2" id="github">
                            <i class="devicon-github-plain colored" ></i>
                            <p className="skillP">Github  </p>
                        </div>
                        <div className="eachSkill2" id="postgres">
                            <i class="devicon-postgresql-plain colored" ></i>
                            <p className="skillP">Postgres  </p>
                        </div>
                        
                        <div className="eachSkill2" id="express">
                            <i class="devicon-express-original colored" ></i>
                            <p className="skillP">Express  </p>
                        </div>

                        <div className="eachSkill2" id="node">
                            <i class="devicon-nodejs-plain colored" ></i>
                            <p className="skillP">Node.js  </p>
                        </div>

                </div>
            </div>
        )}
}

export default Home