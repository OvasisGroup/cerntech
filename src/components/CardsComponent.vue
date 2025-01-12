<template>
    <div class="card-container">
        <div class="card">
            <div class="card-body">
                <img :src="receipt" alt="receipt" width="20%" />
                <div class="receipt-text">
                    <h5>Total Number of Tickets</h5>
                    <h2>10k</h2>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <img :src="vehicles" alt="vehicles" width="20%" />
                <div class="receipt-text">
                    <h5>Paid Vehicles</h5>
                    <h2>10k</h2>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <img :src="paid" alt="paid" width="20%" />
                <div class="receipt-text">
                    <h5>Payment Pending</h5>
                    <h2>10k</h2>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import receipt from "@/assets/images/SVG/ricit.svg";
import vehicles from "@/assets/images/SVG/truck.svg";
import paid from "@/assets/images/SVG/paid.svg";

export default {
    name: "CardsComponent",
    data() {
        return {
            receipt,
            vehicles,
            paid
        };
    },
}
</script>