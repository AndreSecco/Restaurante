<template>
    <div>
        <h1>Página de Hambúrguers</h1>

    </div>
</template>
<script>
    import { collapsed, toggleSidebar } from '@/components/sidebar/state';
export default {
    name: 'Hamburguers',
    setup(){
        return {collapsed, toggleSidebar}
    }
}
</script>