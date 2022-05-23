import React from "react"
import './style.scss'

const Loop = () => {
    return (
        <section class="loop">
            <div class="page-container">
                <div class="loop__wrapper">
                    <div class="loop__div">
                        <h2 class="loop__title">Stay in the loop</h2>
                        <p class="loop__desc">Subscribe to receive the latest news and updates about TDA.
                            We promise not to spam you!
                        </p>
                    </div>
                    <div class="form">
                        <input type="text" class="form-inp" placeholder="Enter email adress" />
                        <button class="form-btn">Continue</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Loop