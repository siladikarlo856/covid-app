<template>
  <header>
    <img
      src="https://www.un.org/sites/un2.un.org/files/covid-19.svg"
      alt="Covid Logo"
      class="covid-logo"
    />
    <h1>COVID-19 app</h1>
  </header>
  <router-view />
</template>

<style lang="scss">
@import './assets/css/reset.css';
header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  .covid-logo {
    width: 80px;
    filter: invert(51%) sepia(50%) saturate(471%) hue-rotate(70deg)
      brightness(91%) contrast(84%);
    margin: 0 10px;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
