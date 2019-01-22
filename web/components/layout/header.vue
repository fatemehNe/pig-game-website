<template>
        <b-navbar toggleable="md" type="dark" variant="dark" sticky >

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand >PigGame</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item to="/">HomePage</b-nav-item>
                <b-nav-item to="allGames" >PlayGame</b-nav-item>
                <b-nav-item   to="allGames" >confirm Comments</b-nav-item>
                <b-nav-item  to="designGame" >Design Game</b-nav-item>
                <b-nav-item  to="users" >Users</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items  v-if="role != 'user' && role != 'admin'"
 v-if="role != 'user' && role != 'admin'" // v-if="role == 'admin'" // v-if="role == 'user' || role == 'admin'"
v-if="role == 'user' || role == 'admin'"-->
            <b-navbar-nav class="ml-auto">
                <b-nav-item  to="signup">SignUp</b-nav-item>
                <b-nav-item  to="login" >Login</b-nav-item>
                <b-nav-item-dropdown  right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                    <em>User</em>
                    </template>
                    <b-dropdown-item to="profile">Profile</b-dropdown-item>
                    <b-dropdown-item v-on:click="signout" >Signout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>
<script>
import axios from 'axios';
export default {
    data: function(){
        return{
           role : 'user'
        }
    },
    mounted(){
        // x = this.$store.state.authUser.role
    },
    methods :{
        async signout(){
            console.log("signout")
            try {
                await this.$store.dispatch('logout', {ID: this.$store.state.authUser._id})
            } catch (e) {
                this.formError = e.message
            }
      }
    }
   
}
</script>
