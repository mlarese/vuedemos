<template>
    <div class="absfg defaults overview" id="a-overview">
        <section-title title="Panoramica"/>
        <div class="container-fluid">
            <div class="row">

                <div class="col-md-3">
                    <avatar class="bb" />
                    <guest-code-edit class="bb mb-sm" />
                    <div class="user-since text-left">
                        {{$t('user since')}} {{currentGuest.userSince }}
                    </div>
                </div>

                <div class="col-md-9">
                    <overview-recap :guest="currentGuest" class="mb-sm"/>
                    <overview-manage-buttons  :guest="currentGuest" />
                </div>

            </div>
        </div>

    </div>

</template>
<script>
    import Base from "../Base"
    import SectionTitle from "../SectionTitle"
    import Avatar from './BeAvatar'
    import GuestCodeEdit from './GuestCodeEdit'
    import OverviewRecap from './OverviewRecap'
    import OverviewManageButtons from './OverviewManageButtons'
    import allFlt from '../../../../../assets/filters'
    import {mapActions,mapState,mapGetters} from 'vuex'

    export default{
        extends:Base,
        filters:{...allFlt},
        components:{SectionTitle,Avatar,GuestCodeEdit,OverviewRecap,OverviewManageButtons}
    }

</script>



<style lang="scss">
    .overview .user-since{
        font-size: 12px !important;
    }
</style>