<script setup lang="ts">
import Login from "@/components/LoginWidget.vue";
import Register from "@/components/RegisterModal.vue";
import ForgotPasswordWidget from "@/components/ForgotPasswordWidget.vue";
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
      <Login />
      <Register />
      <ForgotPasswordWidget />
    </div>
  </div>
</template>
