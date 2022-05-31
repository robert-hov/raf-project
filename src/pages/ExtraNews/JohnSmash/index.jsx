import React from 'react';
import './style.scss';
import peopleTeam from '../../../assets/img/info/people- team.png'
import officeTeam from '../../../assets/img/info/office-team.png'
import officePerson from '../../../assets/img/info/office-person.png'
import classTeam from '../../../assets/img/info/class-team.png'
import childTeam from '../../../assets/img/info/child.png'
import leavesTeam from '../../../assets/img/info/leaves-team.png'
import dojuyaTeam from '../../../assets/img/info/dojuya-team.png'
import sportTeam from '../../../assets/img/info/sport-team.png'
import shipTeam from '../../../assets/img/info/ship-team.png'

const JohnSmash = () => {
    return (
        <section class="john-smash">
            <div class="page-container">
                <div class="general__john">
                    <div class="john__box">
                        <div class="people">
                            <img src={peopleTeam} />
                                <div class="name">
                                    <h4 class="surname">John Smash</h4>
                                </div>
                                <div class="john-text">
                                    <h2 class="john__text-title">Lorem Ipsum is simply dummy text dummy text </h2>
                                    <p class="john__text-desc">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries,</p>
                                    <p class="john__text-desc2">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. </p>
                                </div>
                        </div>
                        <div class="people">
                            <img src={dojuyaTeam} />
                                <div class="name">
                                    <h4 class="surname">John Smash</h4>
                                </div>
                                <div class="john-text">
                                    <h2 class="john__text-title">Lorem Ipsum is simply dummy text dummy text </h2>
                                    <p class="john__text-desc">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries,</p>
                                    <p class="john__text-desc2">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. </p>
                                </div>
                        </div>
                    </div>
                    <div class="lorem">
                        <ul class="general__john-smash">
                            <li class="john">
                                <div class="john-page">
                                    <div class="image">
                                        <div class="img-container">
                                            <img src={officePerson}/>
                                        </div>
                                    </div>
                                    <div class="ipsum">
                                        <button class="ipsum__button ipsum__button--black">John Smash</button>
                                        <h5 class="ipsum__title">Lorem Ipsum is simply dummy text dummy text ?</h5>
                                    </div>
                                </div>
                            </li>
                            <li class="john">
                                <div class="john-page">
                                    <div class="image">
                                        <div class="img-container">
                                            <img src={classTeam} />
                                        </div>
                                    </div>
                                    <div class="ipsum">
                                        <button class="ipsum__button ipsum__button--blue">John Smash</button>
                                        <h5 class="ipsum__title">Lorem Ipsum is simply dummy text dummy text ?</h5>
                                    </div>
                                </div>
                            </li>
                            <li class="john">
                                <div class="john-page">
                                    <div class="image">
                                        <div class="img-container">
                                            <img src={childTeam} />
                                        </div>
                                    </div>
                                    <div class="ipsum">
                                        <button class="ipsum__button ipsum__button--orange">John Smash</button>
                                        <h5 class="ipsum__title">Lorem Ipsum is simply dummy text dummy text ?</h5>
                                    </div>
                                </div>
                            </li>
                            <li class="john">
                                <div class="john-page">
                                    <div class="image">
                                        <div class="img-container">
                                            <img src={leavesTeam} />
                                        </div>
                                    </div>
                                    <div class="ipsum">
                                        <button class="ipsum__button ipsum__button--blue">John Smash</button>
                                        <h5 class="ipsum__title">Lorem Ipsum is simply dummy text dummy text ?</h5>
                                    </div>
                                </div>
                            </li>
                            <li class="john">
                                <div class="john-page">
                                    <div class="image">
                                        <div class="img-container">
                                            <img src={officeTeam} />
                                        </div>
                                    </div>
                                    <div class="ipsum">
                                        <button class="ipsum__button ipsum__button--green">John Smash</button>
                                        <h5 class="ipsum__title">Lorem Ipsum is simply dummy text dummy text ?</h5>
                                    </div>
                                </div>
                            </li>
                            <li class="john">
                                <div class="john-page">
                                    <div class="image">
                                        <div class="img-container">
                                            <img src={sportTeam} />
                                        </div>
                                    </div>
                                    <div class="ipsum">
                                        <button class="ipsum__button ipsum__button--blue">John Smash</button>
                                        <h5 class="ipsum__title">Lorem Ipsum is simply dummy text dummy text ?</h5>
                                    </div>
                                </div>
                            </li>
                            <li class="john">
                                <div class="john-page">
                                    <div class="image">
                                        <div class="img-container">
                                            <img src={shipTeam} />
                                        </div>
                                    </div>
                                    <div class="ipsum">
                                        <button class="ipsum__button ipsum__button--purple">John Smash</button>
                                        <h5 class="ipsum__title">Lorem Ipsum is simply dummy text dummy text ?</h5>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default JohnSmash