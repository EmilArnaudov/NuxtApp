<template>
    <header class="header">
        <nav class="navigation">
            <span>
                <NuxtLink class="logo" to="/">Rentworks</NuxtLink>
            </span>
            <ul class="navItems">
                <li>
                    <NuxtLink class="navLink" to="/register">Register</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="navLink" to="/login">Login</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="navLink" to="/rooms">Rooms</NuxtLink>
                </li>
                <li class="navLinkContainer">
                    <NuxtLink class="navLink" to="/profile">Profile</NuxtLink>
                </li>
                <li>
                </li>
                <li>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.header {
    padding: 20px 35px;
    background-color: rgb(89, 89, 89);
}

.navigation {
    display: flex;
    justify-content: space-between;
}

.logo {
    text-decoration: dashed;
    color: white;
    text-transform: uppercase;
    font-size: 20px;
}

.navItems {
    display: flex;
    gap: 20px
}

.navLink {
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding: 8px 12px;
    background-color: transparent;
    transition: all 300ms ease-in;
}

.navLink:hover {
    cursor: pointer;
    background-color: rgb(109, 109, 109);
}

</style>