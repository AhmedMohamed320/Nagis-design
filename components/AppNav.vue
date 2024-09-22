<template>
    <nav>
        <div class="logo">
            logo
        </div>
        <ul>
            <li>
                home
            </li>
            <li>
                biography
            </li>
            <li>
                services
            </li>
            <li>
                projects
            </li>
            <li>
                community
            </li>
            <li>
                about
            </li>
            <li>
                branding
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
    font-size: 1.85rem;
    padding: 2rem 0;
}

nav ul {
    gap: 1.75rem;
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

.menu span{
    font-size: 1.5rem;
    cursor: pointer;
}
</style>