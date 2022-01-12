<template>
  <div>Active country: {{ getActiveCountry.Slug }}</div>
</template>

<script>
export default {
  name: 'ByDay',
  computed: {
    getActiveCountry() {
      return this.$store.getters.getActiveCountry;
    },
  },
};
</script>
