<template>
    <div>
        <h1>Esta página é sobre o Autor</h1>

    </div>
</template>
<script>
    import { collapsed, toggleSidebar } from '@/components/sidebar/state';
export default {
    name: 'SobreAutor',
    setup(){
        return {collapsed, toggleSidebar}
    }
}
</script>