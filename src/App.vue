<template>
  <div id="nav">
    <router-link to="/">Summary</router-link> |
    <router-link to="/byday">By Day</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: rgba(66, 185, 131, 1);
    }

    &:hover {
      color: rgb(66, 185, 131, 0.8);
    }
  }
}
</style>
