<template> 
<section class="main-login-page">
    <LoginPage />
</section>
    
</template>

<script>
import LoginPage from '@/components/LoginPage.vue'

export default {
    name: 'MainLogin',
    components: {
        LoginPage
    }
}
</script>