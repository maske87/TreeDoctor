<template>
  <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
    <b-navbar-brand to="/" class="d-flex mr-4">
      <Logo /> TreeDoctor
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/identify">Определител</b-nav-item>
        <b-nav-item to="/diseases">Болести</b-nav-item>
        <b-nav-item to="/kinds">Списък видове</b-nav-item>
        <b-nav-item to="/services">Услуги</b-nav-item>
        <b-nav-item to="/about">За нас</b-nav-item>
        <b-nav-item to="/projects">Проекти</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/report">Подай сигнал!</b-nav-item>
        <b-nav-item to="/login">Вход</b-nav-item>
        <b-dropdown id="profile" right variant="link py-0" toggle-class="text-decoration-none" no-caret>
          <template v-slot:button-content>
            <b-avatar variant="primary" :size="32" src="https://placekitten.com/300/300" />
          </template>
          <b-dropdown-item to="#">Профил</b-dropdown-item>
          <b-dropdown-item to="#">Изход</b-dropdown-item>
        </b-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
<style scoped>
.navbar-brand svg{width: 30px;margin-right: 5px}
#profile button {
    padding-top: 0;
    padding-bottom: 0;
}
</style>
