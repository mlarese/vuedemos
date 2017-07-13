<template>
    <div class="container">
        <div class="row">
            <div class="panel panel-default">
                <div class="panel-body bg-gray-light">
                    <div class="col-xs-6">

                        <div>{{labels.search}}</div>
                        <div class="input-group m-b">
                            <span class="input-group-addon ">@</span>
                            <input placeholder="Username" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="col-xs-6">
                        {{labels.order}}
                    </div>
                </div>

            </div>

        </div>


        <div v-if="false">
            <div><div class="test-item"> <router-link to="test-filter">Home</router-link> </div></div>
            <div>
                selected {{orderSelected}}
            </div>
            <hr>
            <div class="order-by" v-for="option in orderOptions">
                <div>{{option}}</div>
            </div>
            <hr>
            <div>
                {{userFilter}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {

        name:'UserListFilter',

        props:[
            'orderOptions',
            'orderSelected',
            'userFilter',
            'labels'
        ]
    }
</script>
<style></style>