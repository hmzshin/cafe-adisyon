<template>
  <header class="bg-header-bg-color">
    <ul class="container mx-auto flex justify-start items-baseline space-x-4 h-14 py-2">
      <li class="nav-link text-xl">
        <router-link to="/menu" active-class="text-primary-color">Hygge</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/hakkimizda" active-class="text-primary-color">Hakkımızda</router-link>
      </li>
      <li class="nav-link">
        <router-link to="/iletisim" active-class="text-primary-color">İletişim</router-link>
      </li>
    </ul>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
}
</script>

<style scoped>
.active-text-color {
  --el-menu-active-color: #db8e28;
}
</style>
