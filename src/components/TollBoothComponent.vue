<template>
    <section class="maindashsum">
    <div class="dashsum">
        <div class="ticketslisting">
            <section class="ticketslist">
                <div>
                <div class="tabla">
                    <h4>Platform:</h4>
                </div>
                <div>
                    <h5>Details</h5>
                </div>
                <img :src="alpr" alt="alpr" width="100%" style="margin-top: .5rem; border-radius: .25rem;"/>
                </div>
            </section>
            <form class="formdata">
                <input type="text" placeholder="Enter Vehicle Registration Number" required/>
                <button>Scan</button>
            </form>
        </div>
        <div class="ticketslisting">
            <section class="ticketslist">
                <div>
                <div class="tabla">
                    <h4>Status:</h4>
                </div>
                <div>
                    <h5>Test</h5>
                </div>
                <img :src="alpr" alt="alpr" width="100%" style="margin-top: .5rem; border-radius: .25rem;"/>
                </div>
            </section>
            <form class="formdata">
                <button>Change Toll Booth</button>
                <button>Next</button>
            </form>
        </div>
    </div>
    </section>
</template>

<script>
import alpr from "@/assets/images/alpr.webp";

export default {
    name: "TollBoothComponent",
    data() {
        return {
            alpr,
        };
    },
}
</script>