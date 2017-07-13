<template>
        <div>
            <div class="title_wrap flex__between">
                <h4 class="title text-gray-medium">{{ $t('Controlla la correttezza dei dati per ricevere il premio') }}</h4>
            </div>
            <div class="row thebox edit">
                <div class="col-md-6">
                    <p>{{ $t('firstname') }}*<br>
                        <input required @keypress="onChange" type="text" class="form-control" name="name" v-model="shippingData.fullname">
                    </p>
                    <p>{{ $t('lastname') }}*<br>
                        <input  required @keypress="onChange" type="text" class="form-control" v-model="shippingData.surname">
                    </p>
                    <p>{{ $t('Città') }}*<br>
                        <input  required @keypress="onChange" type="text" class="form-control" v-model="shippingData.city"></p>
                    <p>{{ $t('zipcode') }}*<br>
                        <input  required type="text" class="form-control" v-model="shippingData.zipcode">
                    </p>
                </div>

                <div class="col-md-6">
                    <p>{{ $t('email address') }}*<br>
                        <input  required @keypress="onChange" type="text" class="form-control" v-model="shippingData.email"></p>
                    <p>{{ $t('telephone') }}<br>
                        <input @keypress="onChange" type="text" class="form-control" v-model="shippingData.telephone"></p>
                    <p>{{ $t('Nazione') }}*<br>
                        <input  required type="text" class="form-control" v-model="shippingData.country">
                    </p>

                    <p>{{ $t('address') }}*<br>
                        <input  required @keypress="onChange" type="text" class="form-control" v-model="shippingData.address"></p>
                </div>


            </div>
        </div>
</template>

<script>
    import { mapState,mapGetters ,mapActions} from 'vuex';
    import _extend from 'lodash/extend';

    export default {
        computed:{
            ...mapState('guest',['shippingData'])
        },
        methods: {
            onChange(){}
        }
    }

</script>