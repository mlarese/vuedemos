<template>
    <div class="prizes-waiting">
        <div class="h5 title">{{ $t( 'Premi in attesa d\'invio') }}</div>
        <component v-for="(p,i) in guestPrizesWaiting" :is="renderer" :item="p" :key="i" class="mb-lg"  />

        <div class="alert bg-warning-light" v-if="guestPrizesWaiting.length==0">
            {{ $t( 'Nessun premio è in attesa d\'invio') }}
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default{
        computed:{
            ...mapGetters('prize',['guestPrizesWaiting']),
            renderer:()=>require('./ListItem'),
        }
    }
</script>