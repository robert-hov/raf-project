import React from "react";
import Heading from "../../components/Heading";
import Info from "./Info";
import About from "./About";
import human from '../../assets/img/heading/human.png'
import Loop from "../../components/Loop";

const Homepage = () => {
    return (
        <>
            <Heading
                title={'Work that we produce for our clients'}
                desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.'}
                linkText={'More details'}
                link={'/'}
                img={human}
            />
            <Info />
            <About />
            <Loop />
        </>
    )
}

export default Homepage