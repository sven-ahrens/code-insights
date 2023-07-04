<script setup>
// TODO:: Add your code here
import Sidenav from './components/Sidenav.vue'
import Mobilenav from './components/Mobilenav.vue'
</script>

<template>
  <div id="app">
    <div class="container py-5">
      <div class="row d-block d-md-none">
        <Mobilenav />
      </div>
      <div class="row mt-5 mt-md-0">
        <div class="col-md-3 col-lg-auto d-none d-md-block">
          <Sidenav />
        </div>
        <main class="col-12 col-md-9 dashboard">
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>
