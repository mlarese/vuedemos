<template>
  <div class="absfg" id="absfg-app" v-cloak="" >
      <div class="ui" v-if="started">
          <profile></profile>
          <div class="container">
              <div class="row">
                  <div class="col-md-3">
                      <avatar></avatar>
                      <navmenu></navmenu>
                  </div>
                  <div class="col-md-9">
                      <router-view></router-view>
                  </div>
              </div>
          </div>
      </div>

  </div>
</template>
 
<script>
  import Avatar from '../components/avatar/index';
  import Navmenu from '../components/navmenu/index';
  import Profile from '../components/profile/index';
  import { mapState } from 'vuex';

  export default{
    components: {
        Avatar,
        Navmenu,
        Profile
    },
    computed: {
        ...mapState({
            loading:'loading',
            started:'started',
            label:'labels',
            user:'profile',
            nav:'menu'
        })
    }
  } 
</script>

<style>

</style>
