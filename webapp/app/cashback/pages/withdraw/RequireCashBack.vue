<template>
    <div class="page">
        <div class="title_wrap">
            <h3 class="title ">RICHIEDI CASHBACK</h3>
        </div>

        <div class="row thebox mb-lg">
            <div class="col-md-12">
                <recap-panel />
                <div class="row whitebox mb-lg">
                    <withdraw-input class="col-md-12" />
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <warning class="mb-lg"/>
                        <transfer/>
                    </div>
                </div>

            </div>
        </div>
        <div class="row whitebox" v-if="isCashbackEnough">
            <div class="col-md-12">
                <recipient/>
            </div>
        </div>
    </div>

</template>

<script>
    import Base from './Base'
    import Warning from './Warning'
    import WithdrawInput from './WithdrawInput'
    import Transfer from './Transfer'
    import RecapPanel from './RecapPanel'
    import Recipient from './Recipient'

    export default{
        extends : Base,
        created(){
            this.load();
        },
        components:{
            Warning,
            WithdrawInput,
            Transfer,
            Recipient,
            RecapPanel,
        }
    }
</script>
<style></style>