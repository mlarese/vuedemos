<template>
  <div class="page">
    <usermodule />
  </div>
</template>

<script>
import Usermodule from '../components/usermodule/index'
import { mapState,mapActions } from 'vuex';
import _extend from 'lodash/extend';

export default {
  computed: {

  },
  beforeCreate(){
      //this.$store.dispatch("user/enterUserEditMode");
  },
  methods:{
      ...mapActions(['hideMessage']),
      ...mapActions('guest',['cancelUserData','updateUserData','modeView','modeEdit']),
      onChange(){  } ,
  },
  components: {
      Usermodule
  }
}
</script>
