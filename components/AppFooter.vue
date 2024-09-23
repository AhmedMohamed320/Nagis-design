<template>
    <footer class="mt-44">
        <ul>
            <li>
                <p>
                    Nagi’s Designs
                </p>
                <p class="opacity-65 font-light">
                    We offer a range of specialized branding services designed to bring your brand to life, ensuring it
                    stands out in the market.
                </p>
                <ul>
                    <li>
                        <img src="/facebook.png" alt="facebook">
                    </li>
                    <li>
                        <img src="/x.png" alt="x">
                    </li>
                    <li>
                        <img src="/instagram.png" alt="instagram">
                    </li>
                    <li>
                        <img src="/youtube.png" alt="youtube">
                    </li>
                </ul>
            </li>
            <li>
                <p class="head">
                    Quick link
                </p>
                <ul>
                    <li>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                        <p>
                            Home
                        </p>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                        <p>
                            Biography
                        </p>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                        <p>
                            Services
                        </p>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                        <p>
                            Projects
                        </p>
                    </li>
                </ul>
            </li>
            <li>
                <p class="head">
                    Blog
                </p>
                <ul>
                    <li>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                        <p>
                            What’s
                        </p>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            chevron_right
                        </span>
                        <p>
                            People saying about
                            Nagi.
                        </p>
                    </li>
                </ul>
            </li>
            <li>
                <p class="head">
                    Contact
                </p>
                <ul>
                    <li>
                        <span class="material-symbols-outlined">
                            home_pin
                        </span>
                        <p>
                            44 Danwers, NY City, USA, 70-102
                        </p>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            mail
                        </span>
                        <p>
                            lamaro@lamaroyc.us
                        </p>
                    </li>
                    <li>
                        <span class="material-symbols-outlined">
                            phone_in_talk
                            </span>
                            <p>
                                91+585-656-658
                            </p>
                    </li>
                </ul>
            </li>
        </ul>
        <p class="text-center text-xl mb-16">
            &copy; 2024 All rights reserved
        </p>
    </footer>
</template>

<style scoped>
footer>ul{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 7rem;
    padding: 5rem 0;
    font-size: 1.5rem;
}

footer>ul>li{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

footer>ul>li p.head{
    position: relative;
    padding-bottom: 1rem;
}

footer>ul>li p.head::after{
    content: "";
    position: absolute;
    width: 3rem;
    height: 1px;
    background-color: var(--color-gold-1);
    bottom: 0;
    left: 0;
}

footer>ul>li ul li{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

footer>ul>li ul li span{
    color: var(--color-gold-1);
    font-size: 2.5rem !important;
    font-weight: 700 !important;
}

footer>ul>li:nth-of-type(1) ul{
    display: flex;
    align-items: center;
    gap: 2rem;
}

footer>ul>li:nth-of-type(1)>p:nth-of-type(1){
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--color-gold-1);
}

footer>ul>li:nth-of-type(1) ul li{
    background-color: var(--color-white-1);
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
}
</style>