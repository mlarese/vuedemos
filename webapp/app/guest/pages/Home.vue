<template>
  <div class="page">
    <component :is="currentView" :show-title="true"></component>
  </div>
</template>


<script>
import Userresume  from '../components/userresume/Userresume'
import Usermodule  from '../components/usermodule/Usermodule'

import { mapState,mapActions } from 'vuex';
import Vue from 'vue'

let store = Vue.$ioc.resolve("store");

export default {
    beforeRouteEnter (to, from, next) {
        //from startup the profile is alredy loaded
        if(from.name==='startup'){
            next();
        }else{
            const goOn = res=> next();
            store.dispatch('guest/getProfile', null ,{root:1})
                .then(goOn)
                .catch(goOn)
        }
    },
	components: {
		Userresume
	},
    computed:{
        ...mapState('guest',['formEditMode']),
        currentView(){
            if(this.formEditMode==='view')
                return Userresume;
            else
                return Usermodule;
        },
    },
}
</script>
