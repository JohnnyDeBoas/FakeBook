<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="row items-center justify-between q-pt-sm">
      <q-img width="130px" class="q-mx-sm q-my-sm" src="../assets/logo.png"></q-img>
      <div>
        <q-icon 
        class="q-mx-sm q-pa-sm q-icon-custom" 
        name="fas fa-search" 
        size="25px"
        />

        <q-icon 
        class="q-mx-sm q-pa-sm q-icon-custom" 
        name="fab fa-facebook-messenger" 
        size="25px"
        />

      </div>
      <div class="flex flex-center full-width">
        <q-tabs v-model="tab" class="text-teal q-mx-sm full-width">
          <q-tab name="home" icon="fas fa-home"></q-tab>
          <q-tab name="user" icon="fas fa-users"></q-tab>
          <q-tab name="video" icon="ondemand_video"></q-tab>
          <q-tab name="story" icon="notifications"></q-tab>
          <q-icon name="fas fa-bars" size="30px" class="q-mr-md q-icon-color"></q-icon>
        </q-tabs>
      </div>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',


  setup () {
    return {
      tab:"home"
    }
  }
})
</script>
<style lang="scss" scoped>
  .q-icon-custom{
    background-color: #f2f3f7;
    border-radius: 50%;
    color: black;
  }
.q-tabs__content{
  height: 70px;
  widows: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.q-tab__icon{
  font-size: 28px;
}
.q-tab {
  padding: 5px;
}
.q-tab--active {
  color:#1678f3
}
.q-tab--inactive {
  color: #656668
}
</style>