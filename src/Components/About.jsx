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
                    Coding helped me discover the truth about a career.
                    <br />
                    <br /> 
                    I am a self-taught musician - I release an original song and music video every month on my YouTube channel. When I graduated with a BA in English from Brooklyn College, I wrote a (not YET best-selling) book about growing up with anxiety. I work very hard at it, but I am naturally a creative person.
                    <br />
                    <br />
                    I have always seen my creativity as a blessing. It pushes me towards innovative solutions to problems I come across daily. Unfortunately, I was not finding jobs that let me flex my creative muscle. After talking to a few friends in the tech field, I decided to try coding. I love the feeling of accomplishment that comes with learning something new. What I got instead was a completely new feeling.
                    <br />
                    <br />
                    I felt shocked.
                    <br />
                    <br />
                    Coding is rewarding. Coding allows me to create. Coding taught me the truth about a career - it can be incredibly fulfilling once you find the one for you.
                    <br />
                    <br />
                    It was then that I knew I had found a new career path to take.
                    <br />
                    <br />
                    I have recently completed a year-long fellowship at Pursuit where I learned JavaScript, React, HTML, CSS, REST APIs, and test-driven development. I'm excited to bring my creative skills into a role as a Full Stack Web Developer.
                </p>      
            </div>
        )
    }
}

export default About