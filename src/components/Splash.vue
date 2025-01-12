<template>
    <div class="topna">
        <p>Close X</p>
    </div>
    <main class="orange">
        <img :src="bg" alt="Icon" />
        <div class="logo">
            <img :src="icon" alt="Icon" />
            <div class="version">

                <p>Version 1.0</p>
                <p>Cerntech Tolling
                    Management System</p>
                <p>&copy; 2024 Cerntech Limited. All rights reserved.</p>
            </div>
        </div>
    </main>
    <div class="pbar">
        <div class="progress-bar">
        </div>
    </div>
</template>

<script>
import icon from "@/assets/images/logo.svg";
import bg from "@/assets/images/centerch.jpg";

export default {
    name: "SplashScreen",
    data() {
        return {
            icon,
            bg
        };
    },
}
</script>