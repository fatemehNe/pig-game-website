<template>
  <div>
    <navigation/>
        <nuxt/>
</div>
</template>
<script>
  import navigation from "~/components/layout/header.vue"
  export default{
    components: {navigation}
  }
</script>
