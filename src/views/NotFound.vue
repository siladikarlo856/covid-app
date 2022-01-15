<template>
  <div>
    <h1>Sorry. Page Not Found :(</h1>
    <p>
      <!-- eslint-disable-next-line vue/no-parsing-error -->
      Please go back or use
      <router-link to="/" class="hyperlink-text">THIS LINK</router-link>
      to navigate on summary page
    </p>
  </div>
</template>
<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 1rem;
}
.hyperlink-text {
  text-decoration: underline;
  color: blue;
}
</style>
