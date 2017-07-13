<template>
    <div>
        <div class="title_wrap flex__between">
            <h4 class="title text-gray-medium">{{ $t('Inserisci i tuoi dati bancari') }}</h4>
        </div>

        <div class="row thebox edit">
            <div class="col-md-12">
                <div :class="{'has-error':!recipient.name}">{{ $t('firstname') }}*<br>  <input type="text" required class="form-control" name="name" v-model="recipient.name"> </div>
                <div :class="{'has-error':!recipient.surname}">{{ $t('lastname') }}*<br>  <input type="text" class="form-control" name="surname" v-model="recipient.surname"> </div>
                <div :class="{'has-error':!recipient.country}">{{ $t('Nazione') }}*<br>  <input type="text" class="form-control" name="country" v-model="recipient.country"> </div>
                <div :class="{'has-error':!isIbanValid}">{{ $t('Iban') }}*<br>  <input type="text" class="form-control" name="iban" v-model="recipient.iban"> </div>
                <div>{{ $t('Nota') }}<br>  <textarea v-model="recipient.note" class="form-control" style="height:80px"></textarea> </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Base from './Base'

    export default{
        extends : Base,
    }

</script>
<style>

</style>