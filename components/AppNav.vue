<template>
    <nav class="flex">
        <div class="logo">
            <img class="w-40" src="/nagis-design-logo.png" alt="nagis-design-logo">
        </div>
        <ul class="hidden md:flex">
            <li>
                <NuxtLink to="/">
                    home
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/biography">
                    biography
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="">
                    services
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">
                    projects
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">
                    community
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">
                    about
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">
                    branding
                </NuxtLink>
            </li>
        </ul>
        <div class="menu flex">
            <span class="material-symbols-outlined" @click="isVisible = !isVisible">
                menu
            </span>
            <!-- <ul :class="{ show: isVisible}">
                <li>
                    <NuxtLink to="/">
                        home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/biography">
                        biography
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="">
                        services
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">
                        projects
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">
                        community
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">
                        about
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">
                        branding
                    </NuxtLink>
                </li>
            </ul> -->
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const isVisible = ref(false);
</script>

<style>
nav,
nav ul {
    align-items: center;
    justify-content: space-between;
}

nav {
    font-size: 1.75rem;
    padding: 2rem 0;
}

nav ul {
    gap: 2rem;
    list-style: none;
    text-transform: capitalize;
}

.menu {
    align-items: center;
    justify-content: center;
    border: 1px solid var(--color-white-1);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    position: relative;
}

.menu span {
    font-size: 2rem;
    cursor: pointer;
}

.menu ul {
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    z-index: 100;
    top: calc(100% + 0.5rem);
    right: -100vw;
    font-size: 1.4rem;
    font-weight: 200;
    background-color: var(--color-black-1);
    border: 1px solid var(--color-gold-2);
    border-radius: 0.5rem;
    padding: 1rem 5rem;
    width: 80vw;
    transition: 0.5s ease-in-out;
}

.menu ul.show {
    right: 0;
}
</style>