<template>
         <b-navbar toggleable="md" type="dark" variant="info" sticky ="">
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="#">Polling</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item href="create-poll">Create Poll</b-nav-item>
                    <b-nav-item href="vote">Vote</b-nav-item>
                    <b-nav-item href="show-resault">Results</b-nav-item>
                </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="homepage">HomePage</b-nav-item>
                <b-nav-item href="about-us">AboutUs</b-nav-item>
            </b-navbar-nav>
       </b-collapse>
    </b-navbar>
</template>
<script>
export default {
    
}
</script>
