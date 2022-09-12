<template>
    <div>
        <h1>Página de Ingredientes</h1>

    </div>
</template>
<script>
    import { collapsed, toggleSidebar } from '@/components/sidebar/state';
export default {
    name: 'Ingredientes',
    setup(){
        return {collapsed, toggleSidebar}
    }
}
</script>