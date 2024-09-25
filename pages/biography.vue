<script setup lang="ts">
import AppSlider from '~/components/AppSlider.vue';
</script>

<template>
    <header>
        <div class="circle num1"></div>
        <div class="circle num2"></div>

        <div class="image">
            <img src="/nagi-image.png" alt="nagi image">
        </div>
        <div class="flex flex-col justify-center gap-16">
            <p class="font-bold text-8xl">
                <span class="text-4xl font-light opacity-60 inline-block mb-4">
                    About me
                </span> <br>
                <span>Hello, Im</span> <br>
                <span class="nagi-name">Nagi</span>
            </p>
            <p class="text-3xl font-light opacity-60 w-11/12 ">
                Lorem ipsum dolor sit amet consectetur. Bibendum tincidunt venenatis non eget. Diam adipiscing diam
                fringilla sed etiam elit. Quis mi in velit non.
            </p>
            <img class="w-60" src="/nagi-signature.png" alt="nagi-signature">
            <ul class="flex items-center gap-16 social ">
                <li>
                    <img src="/public/facebook.png" alt="facebook">
                </li>
                <li>
                    <img src="/public/x.png" alt="x">
                </li>
                <li>
                    <img src="/public/instagram.png" alt="instagram">
                </li>
                <li>
                    <img src="/public/youtube.png" alt="youtube">
                </li>
            </ul>
        </div>
    </header>
    <div>
        <AppSlider />
    </div>
</template>

<style>
.circle {
    position: absolute;
    z-index: -1;
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    filter: blur(5rem);
}

.circle.num1 {
    background-color: var(--color-gold-2);
    bottom: 5rem;
    right: -20rem;
    z-index: 1;
}

.circle.num2 {
    background-color: var(--color-blue-1);
    bottom: -35rem;
    right: -35rem;
    z-index: 1;

}


header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    min-height: 80vh;
}

header .image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

header .image img {
  position: absolute;
  top: 0;
}

.nagi-name {
    color: var(--color-gold-1);
    position: relative;
    display: inline-block;
    margin-top: 1rem;
}

.nagi-name::after {
    content: "";
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-white-1);
}

header .social li img {
    width: 2.25rem;

}
</style>