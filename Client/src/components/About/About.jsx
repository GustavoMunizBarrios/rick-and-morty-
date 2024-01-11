import style from "./About.module.css"

const About = () => {
    return(
        <div className={style.container}>
            <div className={style.container_paragraph}>
                <h1>ABOUT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque vitae semper nunc. Sed at purus in massa laoreet tincidunt.
                        Nulla facilisi. Sed cursus, enim a aliquam aliquet, lorem turpis semper metus, 
                        id feugiat orci sapien at risus. Donec auctor, velit in interdum cursus, neque 
                        dui convallis est, id tincidunt nisi sapien at arcu.
                </p>
            </div>
        </div>
    )
}

export default About;