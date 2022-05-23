import React from 'react';
import friends from "../../assets/img/heading/friends.png";
import Heading from "../../components/Heading";
import Loop from "../../components/Loop";

const About = () => {
    return (
        <>
            <Heading
                title={'Lorem Ipsum is simply dummy text of the printing and.'}
                desc={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'}
                linkText={'Get in touch'}
                link={'/'}
                img={friends}
                isSmall={true}
            />
            <Loop isTitleShown={true}/>
        </>
    );
};

export default About;