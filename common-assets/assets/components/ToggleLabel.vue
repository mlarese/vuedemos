<template>
    <span class="toggle-label  cursor-pointer">
        <span class="element"  v-html="toggleIcon"></span> <span class="element" v-html="toggleLabel"></span>
    </span>
</template>
<script>
    export default{
        name:'ToggleLabel',
        props: {
            showIcone:{default:'+'},
            hideIcon:{default:'-'},
            showText:{default:'Dettaglii'},
            hideText:{default:'Dettaglii'},
            show:{default:false},
        },
        computed:{
            toggleIcon() { return this.show?this.hideIcon:this.showIcone},
            toggleLabel(){ return this.show?this.hideText:this.showText},
        },
    }
</script>
<style lang="scss">
    .toggle-label{
        .element{
            font-style: italic;
            font-size: 12px;
        }
    }
</style>