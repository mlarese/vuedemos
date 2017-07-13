<template>
  <div class="page padder-md startup-page">

      <div v-if="hasError">
          <div class="wrapper">
              <div class="text-center  ">
                  <!-- START panel-->
                  <div class=" mb-xl">
                      <div class="mb-lg">
                          <em class="fa fa-wrench fa-5x text-muted"></em>
                      </div>
                      <div class="text-lg mb-lg" v-if="error.response && error.response.data">{{error.response.data.status}}</div>
                      <div class="text-lg mb-lg" v-if="error.response && error.response.ststus">{{error.response.status}}</div>


                      <p class="lead m0">Oh! Something went wrong :(</p>
                      <p class="lead m0" v-if="error.message"> {{error.message}}</p>
                      <p class="lead m0" v-if="error.response && error.response.data"> {{error.response.data.detail}}</p>

                      <p>Don't worry, we're now checking this.</p>
                      <p>In the meantime, please try one of those links below or come back in a moment</p>
                  </div>


                  <ul class="list-inline text-center text-sm mb-xl">
                      <li><a href="/" class="text-muted">Reload</a> </li>
                  </ul>

              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState,mapActions,mapGetters } from 'vuex';
import Vue from 'vue'

let store = Vue.$ioc.resolve("store");

export default {
    beforeRouteEnter (to, from, next) {
        const goOn = res=> {
            if(res instanceof Error) store.commit('SET_MULTI_LOADING',false,{root:1});
            next()
        };

        store.commit('SET_MULTI_LOADING',true,{root:1});

        store.dispatch('getConfig')
            .then(goOn)
            .catch(goOn) ;
    },
    computed:{
        ...mapState(['error','started','successRoute']),
        ...mapGetters(['hasError']),
    },
    created(){
        if(this.started)
            this.$router.push(   this.successRoute );
    },
}
</script>