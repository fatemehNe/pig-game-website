<template>
        <b-navbar toggleable="md" type="dark" variant="dark" sticky>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand >PigGame</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item href="/">HomePage</b-nav-item>
                <b-nav-item href="allGames" >PlayGame</b-nav-item>
                <b-nav-item href="comments" >confirm Comments</b-nav-item>
                <b-nav-item href="designGame" >Design Game</b-nav-item>
                <b-nav-item href="users" >Users</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="signup">SignUp</b-nav-item>
                <b-nav-item href="login" >Login</b-nav-item>
                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                    <em>User</em>
                    </template>
                    <b-dropdown-item href="profile">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>
<script>
export default {
     async asyncData() {
            // We can return a Promise instead of calling the callback
            let returnedQuestions = (await axios.get('http://localhost:3001/getgozine')).data;
        },
   
}
</script>
