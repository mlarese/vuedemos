<template>
    <div class="warning-table">
        <table>
            <tr>
                <td style="width:1px;vertical-align: top">
                           <span class="fa-stack fa-lg">
                                <i class="fa fa-circle-o fa-stack-2x"></i>
                                <i class="fa fa-exclamation fa-stack-1x"></i>
                            </span>
                </td>
                <td>
                       <span class="text">
                           {{$t(text)}}
                       </span>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default{
        props: ['text']
    }
</script>
<style lang="scss">
    .warning-table {
        line-height:12px;
        .text {
            font-size: 11px;
            font-style: italic;

        }
    }
</style>