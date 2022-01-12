<template>
  <div class="global-summary">
    <h3>Global Summary</h3>
    <p>Total confirmed case: {{ globalSummary.TotalConfirmed }}</p>
    <p>Total confirmed deaths: {{ globalSummary.TotalDeaths }}</p>
    <p>Total confirmed recovered: {{ globalSummary.TotalRecovered }}</p>
  </div>
</template>

<script>
export default {
  name: 'GlobalSummary',
  props: ['globalSummary'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
