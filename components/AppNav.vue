<template>
    <nav>
        <div class="logo">
            <img class="w-36" src="/nagis-design-logo.png" alt="nagis-design-logo">
        </div>
        <ul>
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
        <div class="menu">
            <span class="material-symbols-outlined">
                menu
            </span>
        </div>
    </nav>
</template>

<style>
nav,
nav ul,
.menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

nav {
    font-size: 1.75rem;
    padding: 2rem 0;
}

nav ul {
    gap:2rem;
    list-style: none;
    text-transform: capitalize;
}

.menu {
    justify-content: center;
    border: 1px solid var(--color-white-1);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
}

.menu span {
    font-size: 1.5rem;
    cursor: pointer;
}
</style>