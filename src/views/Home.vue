<template>
    <section class="splash-screen">
    <div class="topna">
        <button @click="navigateToRoute" class="batna">Close X</button>
    </div>
    <main class="orange">
        <img :src="bg" alt="Icon" />
        <div class="logo">
            <img :src="icon" alt="Icon" />
            <div class="version">

                <p>Version 1.0<br>
                Cerntech Tolling
                    Management System<br>
                &copy; 2024 Cerntech Limited. All rights reserved.</p>
            </div>
        </div>
    </main>
    <div class="pbar">
        <div class="progress-bar">
        </div>
    </div>
</section>
</template>

<script>


import icon from "@/assets/images/logo.svg";
import bg from "@/assets/images/centerch.jpg";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
    name: "SplashScreen",
    data() {
        return {
            icon,
            bg
        };
    },
    setup() {
    const router = useRouter();

    onMounted(() => {
      setTimeout(() => {
        router.push("/login"); // Replace "/new-route" with your desired route
      }, 5000); // 5000ms = 5 seconds
    });

    const navigateToRoute = () => {
      router.push("/login"); // Replace "/new-route" with your desired route
    };

    return {
      navigateToRoute,
    };
}
}
</script>