<template>
    <section>
        <div class="maina">
            <div class="dashprev">
                <h5>Dashboard</h5>
                <h5>Toll Booth | Toll Statistics</h5>
            </div>
        </div>
    </section>

    <section class="cardcomponent">
        <CardsComponent/>
    </section>

    <section>
        <DashSummary/>
    </section>
    
</template>

<script>
import CardsComponent from '@/components/CardsComponent.vue';
import DashSummary from '@/components/DashSummary.vue';

export default {
    name: 'UserDashboard',
    components: {
        CardsComponent,
        DashSummary
    }
}
</script>