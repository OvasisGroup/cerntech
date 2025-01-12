<template>
    <div id="app">
        <NavbarComponent v-if="!isExcludedRoute"/>
        <router-view />
    </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  components: {
    NavbarComponent,
  },
  setup() {
    const route = useRoute();
    const excludedRoutes = ['home', 'login']; // Add route names to exclude Header/Footer
    const isExcludedRoute = computed(() => excludedRoutes.includes(route.name));

    return { isExcludedRoute };
  },
};
</script>


