<template>
    <div>
        <div class="alert alert-danger" role="alert">
            {{message}}

            <div><a to="/startup">Retry</a></div>
        </div>

    </div>
</template>
<script>
    import { mapState } from 'vuex';
    export default {
        computed: mapState(['message'])
    }
</script>
<style> 

</style>