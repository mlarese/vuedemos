<template>
        <nav   class="sidebar"  >
            <!-- START sidebar nav-->
            <admin-menu-avatar
                :image="avatar"
                :title="avatarTitle"
                :subtitle="avatarSubTitle"
            ></admin-menu-avatar>
            <ul class="nav">
                <!-- Iterates over all sidebar items-->
                <li class="nav-heading ">

                    <div data-localize="sidebar.heading.HEADER">Menu</div>
                </li>


                <!-- li class=" active">
                    <a href="singleview.html" title="Single View">
                        <em class="fa fa-file-o"></em>
                        <span data-localize="sidebar.nav.SINGLEVIEW">Single View</span>
                    </a>
                </li>
                <li class=" ">
                    <a href="#menuid" title="Menu" data-toggle="collapse">
                        <em class="icon-folder"></em>
                        <span data-localize="sidebar.nav.menu.MENU">Menu</span>
                    </a>
                    <ul id="menuid" class="nav sidebar-subnav collapse">
                        <li class="sidebar-subnav-header">Menu</li>
                        <li class=" ">
                            <a href="submenu.html" title="Sub Menu">
                                <span data-localize="sidebar.nav.menu.SUBMENU">Sub Menu</span>
                            </a>
                        </li>
                    </ul>
                </li>
                -->

            </ul>
            <!-- END sidebar nav-->
        </nav>

</template>
<script>
    import AdminMenuAvatar from "./AdminMenuAvatar";
    export default {
        props:{
            asideCollapsed:{
                type: Boolean,
                required: true
            },
            avatar:{type:String},
            avatarTitle:{type:String},
            avatarSubTitle:{type:String}
        },
        components:{
            AdminMenuAvatar
        }
    }
</script>