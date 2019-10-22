<template>
  <div class="app-main-layout">

    <Navbar @click="isShowSidebar=!isShowSidebar"></Navbar>
    <Sidebar v-if="isShowSidebar"></Sidebar>

    <main class="app-content" :class="{full:!isShowSidebar}">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link to="/record" class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/app/Navbar'
  import Sidebar from '@/components/app/Sidebar'

  export default {
    name: 'MainLayout',
    components: {
      Navbar, Sidebar
    },
    data:()=>({
      isShowSidebar:true
    }),
  async  mounted() {
      if(!Object.keys(this.$store.getters.info).length){
          await this.$store.dispatch('fetchInfo')
      }
    }
  }
</script>

<style scoped>

</style>
