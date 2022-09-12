<template>
    <div>
        <h1>Página Como fazer</h1>
    </div>
</template>
<script>
    import { collapsed, toggleSidebar } from '@/components/sidebar/state';
export default {
    name: 'ComoFazer',
    setup(){
        return {collapsed, toggleSidebar}
    }
}
</script>