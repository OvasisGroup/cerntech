<template>
    <section class="login-bg">
        <div class="login-form">
            <form>
            <img :src="icon" alt="Icon" />
            <input type="text" placeholder="Please Enter Username" required/>
            <input type="password" placeholder="Please Enter Password" required />
            <button @click="navigateToRoute">Login</button>
            <a href="#">Forgot Password?</a>
        </form>
        </div>
    </section>
  </template>
  
  <script>
  import icon from "@/assets/images/logo.svg";
  import bg from "@/assets/images/centerch.jpg";
  import { useRouter } from "vue-router";

  export default {
    name: 'LoginPage',
    data() {
        return {
            icon,
            bg
        };
    },
    setup() {
        const router = useRouter();

        const navigateToRoute = () => {
            router.push("/userDashboard"); // Replace "/new-route" with your desired route
        };

        return {
            navigateToRoute,
        };
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  