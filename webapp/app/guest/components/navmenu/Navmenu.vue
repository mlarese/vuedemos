<template>
	<div class="nav fg-nav-menu">
        <template v-if="item.showInMenu" v-for="item in nav"   >
			<nav-menu-single-item :item="item" :key="item.label" />
		</template>
	</div>
</template>

<script>
    import { mapState } from 'vuex';
    import _startsWith from 'lodash/startsWith'
	import NavMenuSingleItem from './NavMenuSingleItem'

    export default {
        name:'Navmenu',
        components:{   NavMenuSingleItem     },
        computed:{
            ...mapState('guest',{  nav:'menu'  })
        }
    }
</script>

<style lang="scss">
    .fg-nav-menu {
		button{
			width:100%;
		}
		button:hover{
			color:rgb(48,48,48) !important ;
		}
		button.router-link-active {
			background-color: #ee8c32;
			color: white !important;
		}

		button:hover.router-link-active {
			background-color: rgb(238,140,50) !important;
			cursor:default;
		}

		button[disabled="disabled"] {
			background-color: rgb(221,221,221) !important;
		}
		button[disabled="disabled"].router-link-active {
			background-color: rgb(238,140,50) !important;
			opacity: 0.6;
		}
    }
</style>