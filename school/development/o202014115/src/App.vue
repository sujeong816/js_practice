<template>
    <nav>
      <router-link to="/">ExamOne</router-link> |
      <router-link to="/two">ExamTwo</router-link> |
      <router-link to="/three">ExamThree</router-link> |
      <router-link to="/four">ExamFour</router-link>
    </nav>
    <router-view />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px; margin: 30px auto; 
        width: 800px; border: 1px solid #ccc; 
        box-shadow: 3px 3px 3px #aaa;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
