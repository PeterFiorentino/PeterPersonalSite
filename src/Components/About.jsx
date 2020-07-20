import React from 'react';
import piano from '../pianoPic.jpg'
import suit from '../suit.png'

class About extends React.Component{
    constructor(){
        super()
        this.state = {
       
        }
    }

    changePic(event) {
        if(event.target.id === "1"){
            event.target.src = piano
            event.target.id = "2"
        } else {
            event.target.src = suit
            event.target.id = "1"
        }
    }

    render() {
        return (
            <div id="About">
                <img src={suit} id="1" onMouseOver={this.changePic} className="aboutPic" alt="Pics of Peter"></img>    
                <p>
                    All my life I have loved music. I learned how to play saxaphone in high school and used that 
                    knowledge to teach myself how to play other instruments including piano and bass. My passion for 
                    music is actually how I found my skill in tech. I taught myself Digital Audio Workstations like Pro Tools
                    and Ableton in order to record my music. Though it was a completely different field, having that background 
                    in tech made my transition from musician to Software Engineer feel welcoming and familiar.
                </p>      
            </div>
        )
    }
}

export default About