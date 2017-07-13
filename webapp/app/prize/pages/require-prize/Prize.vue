<template>
    <div class="prize">
        <div class="image">
            <img :src="prize.image" :alt="$t(prize.imageTitle)">
        </div>
        <div class="content">
            <div class="description">
                <p class="text-center bold text-gray-medium">
                    {{$t(prize.imageTitle)}}
                </p>
            </div>

            <div class="details">
                <span class="clickable bold pull-left" @click="onDetailBtn"><i>+ {{$t('Dettagli')}}</i></span>
                <span class="bold pull-right orange">{{prize.requiredPoints}} {{$t('punti')}}</span>
                <span class="clearfix"></span>
            </div>

            <div class="row mt-sm" v-if="prize.selectable">
                <div class="col-xs-12">
                    <button @click="onSelectBtn" class="select-btn wd-wide btn btn-warning">{{$t('Ritira il premio')}} <span class="fa fa-angle-right ml-sm"> </span></button>
                </div>
            </div>
            <span class="clearfix"></span>
        </div>
    </div>

</template>

<script>
    import {mapActions,mapState,mapGetters} from 'vuex'
    export default{
        methods:{
            ...mapActions('prize',['selectPrize']),
            onSelectBtn(){
                this.selectPrize(this.prize)
                    .then(res=>{
                        this.$router.push({name:'gift-request'});
                    })
            },
            onDetailBtn(){
                this.selectPrize(this.prize)
                    .then(res=>{
                        this.$router.push({name:'gift-detail'});
                    })
            }
        },
        computed:{
            ...mapState('prize',['current'])
        },
        props:['prize']
    }
</script>

<style lang="scss">

    .prize{
        .description{
            min-height: 40px;
        }
        .image {
            background-color: white !important;
            img {
                width: 100%;
                overflow: hidden;
                max-height: 200px;
            }
        }
    }
</style>