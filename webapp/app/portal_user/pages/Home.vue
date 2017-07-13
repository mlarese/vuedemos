<template>
    <admin-layout :collapsed="asideCollapsed" >
        <admin-header @toggle="toggleAside"  slot="header"></admin-header>
        <admin-title-bar  class="sticked"  slot="title" :title="pageTitle" :sub-title="pageSubTitle"></admin-title-bar>
        <admin-left-nav
            :avatar="currentUser.avatar"
            :asideCollapsed="asideCollapsed"
            :avatarTitle="currentUser.portalName"
            :avatarSubTitle="currentUser.portalType"
            slot="left"
        ></admin-left-nav>
        <admin-footer slot="footer"></admin-footer>
    </admin-layout>
</template>

<script>
  import AdminLayout from '../components/admin/AdminLayout';
  import AdminHeader from '../components/admin/AdminHeader';
  import AdminLeftNav from '../components/admin/AdminLeftNav';
  import AdminFooter from '../components/admin/AdminFooter';
  import AdminTitleBar from '../components/admin/AdminTitleBar';
  import { mapState,mapActions } from 'vuex';


  export default{
      data(){
          return {
              asideCollapsed:false
          }
      },
      computed:{
          ...mapState('portal_user',[
              'pageTitle',
              'pageSubTitle',
              'currentUser'
          ])
      },
      methods:{
          toggleAside(){
              this.asideCollapsed = !this.asideCollapsed;
          }
      },
      created(){
            $("body").addClass("layout-fixed");
      },
      components: {
        AdminLayout,
        AdminHeader,
        AdminFooter,
        AdminTitleBar,
        AdminLeftNav
      }
  } 
</script>

