<template>
    <div class="progress-bar-container">
      <div 
        class="progress-bar-fill"
        :style="{ width: computedWidth }"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProgressBar",
    props: {
      value: {
        type: Number,
        required: true,
        default: 0, // Current progress
      },
      max: {
        type: Number,
        required: true,
        default: 100, // Maximum progress
      },
    },
    computed: {
      computedWidth() {
        const progress = (this.value / this.max) * 100;
        return `${Math.min(progress, 100)}%`; // Cap it at 100%
      },
    },
  };
  </script>
  
  <style scoped>
  .progress-bar-container {
    width: 100%;
    height: 20px;
    background-color: #e0e0e0;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .progress-bar-fill {
    height: 100%;
    background-color: #4caf50;
    transition: width 0.3s ease-in-out;
  }
  </style>
  