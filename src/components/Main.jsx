import React from "react";
import Typewriter from "typewriter-effect";
import {FaGithub, FaLinkedinIn} from 'react-icons/fa';


const Main = () => {
    return (
        <section id='main'>
            <img className="w-full h-screen object-cover object-left" src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHx0ZXh0dXJlZCUyMGJhY2tncm91bmQlMjBibHVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=600" alt="lavendar gradient" />            
            <section className="w-full h-screen absolute top-0 left-0 bg-white/30">
                <section>
                    <h1>I'm Athena Wallis</h1>
                    
                    <h2>I'm a  <Typewriter
                        options={{
                        strings: ['Developer', 'Customer Service Expert', 'Lifelong Learner'],
                        autoStart: true,
                        loop: true,
                        }}
                     />
                    </h2>
                    <section>
                        <FaGithub />
                        <FaLinkedinIn />
                    </section>
                </section>


            </section>

           

        </section>
    )
}

export default Main