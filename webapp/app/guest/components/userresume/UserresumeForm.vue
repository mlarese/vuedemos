<template>

    <div class="row thebox normal user-resume-form text-left"  >
        <div class="col-md-6">
            <p>{{ $t('firstname') }}&nbsp;<br>
                <strong class="user-resume-form-field-value">{{ user.fullname }}</strong></p>
            <p>{{ $t('lastname') }}&nbsp;<br>
                <strong class="user-resume-form-field-value">{{ user.surname }}</strong></p>
            <p>{{ $t('gender') }}&nbsp;<br>
                <strong class="user-resume-form-field-value"> {{$t(user.gender)}} </strong></p>
            <p>{{ $t('date_of_birth') }}&nbsp;<br>
                <strong class="user-resume-form-field-value">{{ user.date_of_birth }}&nbsp;</strong></p>
            <p>{{ $t('traveller_type') }}&nbsp;<br>
                <strong class="user-resume-form-field-value">{{ $t(user.traveller_type) }}</strong></p>
        </div>
        <div class="col-md-6">
            <p>{{ $t('email address') }}&nbsp;<br>
                <strong class="user-resume-form-field-value">{{ user.email }}</strong></p>
            <p>{{ $t('telephone') }}&nbsp;<br>
                <strong class="user-resume-form-field-value">{{ user.telephone }}</strong></p>
            <p>{{ $t('city') }}&nbsp;<br>
                <strong class="user-resume-form-field-value">{{ user.city }}</strong></p>
            <p>{{ $t('address') }}&nbsp;<br>
                <strong class="user-resume-form-field-value">{{ user.address }}</strong></p>
            <p>{{ $t('zipcode') }}&nbsp;<br>
                <strong class="user-resume-form-field-value">{{ user.zipcode }}</strong></p>
        </div>
    </div>

</template>

<script>
    import { mapState } from 'vuex';
    export default {
        computed:{
            ...mapState('guest',{
                user:'currentGuest'
            })
        }
    }
</script>
<style lang="scss">
</style>