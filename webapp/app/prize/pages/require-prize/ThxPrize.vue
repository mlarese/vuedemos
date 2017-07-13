<template>
    <div>
        <div class="page">
            <div class="page__requestawards thx-prize">

                <div class="row thebox">
                    <div class="col-md-12">
                        <!-- notes -->
                        <div class="row reset_pad awards_wrap">
                            <div class="col-md-12">
                                <h2 class="bold">{{$t(current.imageTitle)}}</h2>
                                <h5 class="bold orange">{{$t('Il tuo ordine si è concluso con successo')}}</h5>
                            </div>
                        </div>
                        <div class="row reset_pad awards_wrap flex__between">
                            <div class="col-md-6">
                                <div class="p_image">
                                    <img :src="current.image" :alt="$t(current.imageTitle)">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <p>{{$t('ATTENZIONE')}}</p>
                                <p class="parag">{{$t('Verrai avvisato dei dettagli per la ricezione del premio con un messaggio al tuo indirizzo e-mail')}}</p>
                                <p>&nbsp;</p>
                                <a class="btn btn-warning btn-md" href="#/gift">
                                    {{$t('ORDINA ALTRI PREMI')}}
                                    <i class="ml-lg fa fa-angle-right"></i></a>
                            </div>
                        </div>
                        <!-- record 1 chat off -->
                        <div class="row reset_pad awards_wrap">
                        </div>
                    </div>
                </div>
            </div></div>
    </div>
</template>
<script>
    import {mapActions,mapState,mapGetters} from 'vuex'
    import RequestedPrize from './RequestedPrize'

    export default{
        extends:RequestedPrize
    }
</script>
<style lang="scss">
    .thx-prize{
        .p_image{
            padding:20px 20px 20px 0px;
            img{ width:350px}
        }
    }
</style>