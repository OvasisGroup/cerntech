<script>
import { ref, onMounted } from 'vue';
import icon from "@/assets/images/logo.svg";
import bg from "@/assets/images/centerch.jpg";
import 'remixicon/fonts/remixicon.css';

const navbarRef = ref(null);

onMounted(() => {
  if (navbarRef.value) {
    console.log(navbarRef.value.parentNode); // Safely access parentNode here
  } else {
    console.error('Navbar element is not found');
  }
});

// const isMenuOpen = ref(false);
// const isProfileDropdownOpen = ref(false);

// const toggleProfileDropdown = () => {
//   isProfileDropdownOpen.value = !isProfileDropdownOpen.value;
// };

export default {
    name: "NavbarComponent",
    data() {
        return {
            icon,
            bg,
            currentDate: new Date().toLocaleDateString(), // Format as a readable string
            currentTime: new Date().toLocaleTimeString(), // Format as a readable string
        };
    },
    props: {
    notificationCount: {
      type: Number,
      default: 0, // Default to 0 notifications
    },
  },
  methods: {
    openNotifications() {
      console.log("Opening notifications...");
      // Logic to open or handle notifications
    },
  },
  }

</script>

<template>
  <div ref="navbarRef" class="navbar">
    <nav class="navclass">
    <div class="navbar-container">
      <!-- Brand/Logo -->
      <div class="text-xl font-bold">
        <img :src="icon" alt="Icon" width="250px"/>
      </div>

      <!-- Links -->

      <div class="apar">
        <h2>
          Namule Toll Station
        </h2>
      </div>
      
        <!-- Profile Dropdown -->
         <div class="profile-dropdown">
          <div class="nam">Date: {{ currentDate }} : {{ currentTime }}</div>
          <div class="nam">Yard: 1</div>
          <div class="nocion"><i class="ri-shadow-fill"></i></div>
          <div class="notification-icon nocion" @click="openNotifications">
            <i class="ri-notification-3-line"></i>
            <span v-if="notificationCount < 0" class="badge">
              {{ notificationCount }}
            </span>
          </div>
          
          <div class="nocion"><i class="ri-account-circle-line"></i></div>
          <div class="nam">A. N Other</div>
         </div>
    </div>
  </nav>
  </div>

    <div class="navbat">
      
      <a href="/" class="navli">
        Dashboard
      </a>
      <a href="/about" class="navli">
        Toll booth
      </a>
      <a href="/services" class="navli">
        Security
      </a>
      <a href="/contact" class="navli">
        Setup
      </a>
      <a href="/contact" class="navli">
        Reports
      </a>
      <a href="/contact" class="navli">
        Settings
      </a>
      <a href="/contact" class="navli">
        Technical
      </a>
      </div>

</template>
