<template>
  <div>
    <Error :errorCode="404" />
  </div>
</template>

<script>
import Error from "@/components/Error.vue";
export default {
  components: { Error },
};
</script>