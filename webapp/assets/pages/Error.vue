<template>
    <div>
        <div class="alert alert-danger" role="alert">
            {{startup.message}}

            <div><a to="/startup">Retry</a></div>
        </div>

    </div>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        computed: mapState('general',{
            startup:'startup'
        })

    }
</script>
<style> 

</style>