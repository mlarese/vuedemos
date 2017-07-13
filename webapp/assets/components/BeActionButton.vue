<template>
    <div class="action-button" :class="name+'-action'">
        <img class='image' :src="image" >
        <div class="text mt-xs">{{ $t( caption ) }}</div>
        <div class="caret-container">
            <span class="fa fa-caret-down" :class="{'fa-caret-down':!caretUp,'fa-caret-up':caretUp}" ></span>
        </div>
    </div>
</template>
<script>
    export default{
        props: ['name','image','caption','caretUp']
    }
</script>
<style lang="scss">

    .action-button {
        .text{ text-transform: uppercase ; font-size:10px }
    }

</style>