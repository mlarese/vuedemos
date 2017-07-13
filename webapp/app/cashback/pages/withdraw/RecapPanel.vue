<template>
    <div>
        <div class="row mb-lg">
            <div class="col-md-6 right_gutter r_line">
                <recap-item label="Totale cashback maturato" :value="summary.earnedCashback" lclass="black" vclass="green bold"  />
            </div>
            <div class="col-md-6 left_gutter">
                <recap-item label="Totale cashback ritirato" :value="summary.usedCashback" lclass="black" vclass="green bold"  />
            </div>
        </div>
        <div class="row mb-lg" >
            <div class="col-md-6 right_gutter r_line">
                <recap-item label="Saldo cashback ritirabile" :value="summary.balanceCashback" lclass="black bold" vclass="saldo orange bold"  />
            </div>
            <div class="col-md-6 left_gutter">
                <recap-item label="Totale cashback in attesa di accredito *" :value="summary.accreditCashback" vclass="bold" lclass=""  />
            </div>
        </div>
    </div>
</template>
<script>
    import Base from './Base'
    import RecapItem from './RecapItem'

    export default{
        extends:Base,
        components:{RecapItem}
    }
</script>
<style></style>