<template>
    <div class="hero">
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <section>
            <div class="welcomeText -mt-12">
                <p>
                    <span class="text-1">
                        Design
                    </span>
                    <br>
                    <span class="text-2">
                        Brand
                    </span>
                    <br>
                    <span class="text-3">
                        Dimensions
                    </span>
                </p>
                <p>
                    Branding is how to connect all your brand dimensions
                </p>
            </div>
            <div class="hero-image">
                <img src="/hero-img.png" alt="">
            </div>
        </section>
        <div class="statics">
            <div class="circle-3"></div>
            <ul>
                <li>
                    <p>
                        Projects
                    </p>
                    <span>
                        27+
                    </span>
                </li>
                <li>
                    <p>
                        auction
                    </p>
                    <span>
                        15+
                    </span>
                </li>
                <li>
                    <p>
                        artist
                    </p>
                    <span>
                        12+
                    </span>
                </li>
                <li>
                    <div class="w-fit m-auto">
                        <p class="text-start mb-4 -ml-4">
                            art <span class="font-bold uppercase">3.4 eth</span>
                        </p>
                        <div>
                            <ul class="dummy-image-list">
                                <li>
                                    <img src="/person-1.png" alt="person">
                                </li>
                                <li>
                                    <img src="/person-2.png" alt="person">
                                </li>
                                <li>
                                    <img src="/person-3.png" alt="person">
                                </li>
                                <li>
                                    <img src="/person-4.png" alt="person">
                                </li>
                                <li>
                                    <img src="/person-5.png" alt="person">
                                </li>
                            </ul>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
    </div>
    <div class="service">
        <div class="circle-4"></div>
        <div class="our-service">
            <div>
                <ul>
                    <li>
                        <img src="/icon-pen.png" alt="icon pen">
                    </li>
                    <li>
                        <p class="text-4xl font-normal leading-tight mb-2 w-3/4">
                            Identity Branding
                        </p>
                        <p>
                            Create , Design and Develope your Brand
                        </p>
                    </li>
                    <li class="flex items-center gap-2 w-fit">
                        <p>
                            Learn More
                        </p>
                        <span class="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <img src="/icon-pen-2.png" alt="icon pen">
                    </li>
                    <li>
                        <p class="text-4xl font-normal leading-tight mb-4 w-3/4">
                            Visual Identity Branding
                        </p>
                        <p>
                            If you want to know more about branding,
                            Understand your Identity
                        </p>
                    </li>
                    <li class="flex items-center gap-2 w-fit">
                        <p>
                            Learn More
                        </p>
                        <span class="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <img src="/icon-paper.png" alt="icon paper">
                    </li>
                    <li>
                        <p class="text-4xl font-normal leading-tight mb-4 w-3/4">
                            Media Identity Branding
                        </p>
                        <p>
                            Business leaders realized the value of branding
                        </p>
                    </li>
                    <li class="flex items-center gap-2 w-fit">
                        <p>
                            Learn More
                        </p>
                        <span class="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <img src="/icon-computer.png" alt="icon computer">
                    </li>
                    <li>
                        <p class="text-4xl font-normal leading-tight mb-4 w-3/4">UI UX Design</p>
                        <p>Create , Design and Develope your Brand</p>
                    </li>
                    <li class="flex items-center gap-2 w-fit">
                        <p>
                            Learn More
                        </p>
                        <span class="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="learn-more-service w-11/12">
            <p class="text-8xl font-semibold uppercase leading-tight">
                Service i
                can offer
            </p>
            <p class="text-5xl leading-tight opacity-65 font-extralight">
                We offer a range of specialized branding services designed to bring your brand to life, ensuring it
                stands out in the market.
            </p>
            <div class="flex items-center gap-8 text-5xl">
                <p>
                    Learn More
                </p>
                <span class="material-symbols-outlined text-7xl">
                    trending_flat
                </span>
            </div>
        </div>
    </div>

</template>

<style>
.circle-1,
.circle-2,
.circle-3,
.circle-4 {
    position: absolute;
    z-index: -1;
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    background-color: rgba(242, 158, 80, 0.1);
    filter: blur(5rem);
}

.circle-1 {
    top: 10rem;
    left: -10rem;
}

.circle-2 {
    top: 1rem;
    right: 1rem;
    width: 50rem;
    height: 50rem;
    background-color: #ffe3131f;
}

.hero section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
    padding-top: 3rem;
}

.welcomeText .text-1,
.text-2,
.text-3 {
    font-size: 8rem;
    font-weight: 700;
    background: linear-gradient(90deg, #ffffff, #ffffff, #919191);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    line-height: 9rem;
}

.welcomeText .text-3 {
    background: linear-gradient(90deg, var(--color-gold-1), var(--color-gold-1), #695f2e);
    -webkit-background-clip: text;
    background-clip: text;
}

.welcomeText>p:nth-of-type(2) {
    font-size: 2.75rem;
    font-weight: 300;
    max-width: 50rem;
    padding-top: 1rem;
}

.hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-image img {
    width: 95%;
    max-width: 48rem;
}

.statics {
    background: rgba(255, 255, 255, 0.09);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(15px);
    border-radius: 3rem;
    padding: 5rem;
    margin-top: -3rem;
    position: relative;
}

.circle-3 {
    top: -2rem;
    left: 10rem;
    width: 25rem;
    height: 25rem;
    background-color: #04ff3a0a;
}

.statics>ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    align-items: center;
    font-size: 2.25rem;
    list-style: none;
    text-align: center;
    text-transform: capitalize;
}

.statics>ul>li {
    display: flex;
    gap: 0.75rem;
    flex-direction: column
}

.statics>ul>li>span {
    font-weight: 600;
    font-size: 5rem;
}

.dummy-image-list {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
}

.dummy-image-list li {
    width: 5rem;
    margin-left: -1.5rem;
}

.service {
    display: grid;
    grid-template-columns: 4fr 3fr;
    gap: 8rem;
    padding: 10rem 2rem;
    position: relative;
}

.circle-4 {
    top: -10rem;
    right: -10rem;
    width: 70rem;
    height: 70rem;
    background-color: #69b7ff18;
}

.our-service {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
}

.our-service>div {
    border-radius: 2.5rem;
    padding: 2.5rem;
}

.our-service>div:nth-of-type(1) {
    background-color: #46422b81;
}

.our-service>div:nth-of-type(2) {
    background-color: #2c473d81;
}

.our-service>div:nth-of-type(3) {
    background-color: #48363481;
}

.our-service>div:nth-of-type(4) {
    background: #47392481;
}

.our-service>div ul {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 1.5rem;
    font-size: 1.2rem;
    font-weight: 300
}

.our-service>div ul>li:nth-of-type(1) {
    background-color: #695f2e;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
}

.our-service>div ul>li:nth-of-type(3) {
    background-color: #d9d9d91f;
    border-radius: 5rem;
    padding: 4px 8px;
    cursor: pointer;
}

.learn-more-service{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>