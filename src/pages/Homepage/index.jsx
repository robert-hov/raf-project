import React from "react";
import Heading from "../../components/Heading";
import About from "./About";
import human from '../../assets/img/heading/human.png'
import Loop from "../../components/ContactMail";
import Culture from "./Culture";

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
            <Culture />
            <About />
            <Loop />
        </>
    )
}

export default Homepage