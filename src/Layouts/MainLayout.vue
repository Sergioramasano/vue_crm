<template>
  <div>
    <Loader v-if="loading" />
    <div v-else class="app-main-layout">

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
      isShowSidebar:true,
        loading:true
    }),
  async  mounted() {
      if(!Object.keys(this.$store.getters.info).length){
          await this.$store.dispatch('fetchInfo')
      }
      this.loading = false;
    }
  }
</script>

<style scoped>

</style>
