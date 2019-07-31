<template>
    <div class="dashboard">
        <Nav />
        <div class="components-dashboard">
            <Daily />
        </div>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Clock from '@/components/Clock.vue';
import Class from '@/components/Class.vue';
import Daily from '@/components/Daily.vue';

export default {
    name: "dashboard",
    components: {
        Nav,
        Clock,
        Class,
        Daily
    }

}
</script>

<style>
</style>
