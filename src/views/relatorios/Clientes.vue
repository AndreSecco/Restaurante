<template>
    <div>
        <h1>Página de Clientes</h1>

    </div>
</template>
<script>
    import { collapsed, toggleSidebar } from '@/components/sidebar/state';
export default {
    name: 'Clientes',
    setup(){
        return {collapsed, toggleSidebar}
    }
}
</script>