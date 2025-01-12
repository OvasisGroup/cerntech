<template>
    <section class="maindashsum">
    <div class="dashsum">
        <div class="ticketslist">
            <div>
        <div class="tabla">
            <h3>Tickets</h3>
            <button>View All</button>
        </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="vuetab">ID</th>
          <th class="vuetab">Name</th>
          <th class="vuetab">Email</th>
          <th class="vuetab">Origin</th>
          <th class="vuetab">Destination</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="vuetab">{{ user.id }}</td>
          <td class="vuetab">{{ user.date }}</td>
          <td class="vuetab">{{ user.truck_number }}</td>
          <td class="vuetab">{{ user.origin }}</td>
          <td class="vuetab">{{ user.destination }}</td>
        </tr>
      </tbody>
    </table>
  </div>
        </div>
        <div class="ticketslist">
            <div>
        <div class="tabla">
            <h3>Tickets</h3>
            <button>View All</button>
        </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="vuetab">ID</th>
          <th class="vuetab">Name</th>
          <th class="vuetab">Email</th>
          <th class="vuetab">Origin</th>
          <th class="vuetab">Destination</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="vuetab">{{ user.id }}</td>
          <td class="vuetab">{{ user.date }}</td>
          <td class="vuetab">{{ user.truck_number }}</td>
          <td class="vuetab">{{ user.origin }}</td>
          <td class="vuetab">{{ user.destination }}</td>
        </tr>
      </tbody>
    </table>
  </div>
        </div>
    </div>
    </section>
</template>

<script>

export default {
    name: "DashSummary",
    data() {
    return {
      users: [
        { id: 1, date: "11/01/2024:16:49:31", truck_number: "KCC031G", origin: "Nambale", destination: "Namule" },
        { id: 2, date: "11/01/2024:16:49:31", truck_number: "KCC031G", origin: "Nambale", destination: "Namule" },
        { id: 3, date: "11/01/2024:16:49:31", truck_number: "KCC031G", origin: "Nambale", destination: "Namule" },
        { id: 4, date: "11/01/2024:16:49:31", truck_number: "KCC031G", origin: "Nambale", destination: "Namule" },
        { id: 5, date: "11/01/2024:16:49:31", truck_number: "KCC031G", origin: "Nambale", destination: "Namule" },
      ],
    };
  },
}
</script>

<style>
.maindashsum{
    width: 88%;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
}

.dashsum{
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
}

.ticketslist{
    width: 100%;
    border: 1px solid #FFCB05;
    border-radius: .5rem;
    background-color: white;
    padding: 1rem;
}

.PaidVehicles{
    width: 100%;
    border: 1px solid #FFCB05;
    border-radius: .5rem;
    background-color: white;
    padding: 1rem;
}

table {
  width: 100%;
}

.table td, .table th {
  /* padding: 8px 12px; */
  text-align: left;
  border: 1px solid #000000;
}

th{
    font-weight: 700;
    color: #FFCB05;
    background-color: #000000;
}

.vuetab{
    border-bottom: 1px solid #FFCB05;
    padding: .5rem 0rem;
}

.table>:not(caption)>*>* {
    padding: .5rem .6rem !important;
    color: var(--abstack-table-color-state, var(--abstack-table-color-type, var(--abstack-table-color)));
    border-bottom-width: var(--abstack-border-width);
    box-shadow: inset 0 0 0 9999px var(--abstack-table-bg-state, var(--abstack-table-bg-type, var(--abstack-table-accent-bg)));
}

.tabla{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: 'Signika', sans-serif;
    margin-bottom: 1rem;
}

.tabla h3{
    font-family: 'Signika', sans-serif;
    color: black;
}

.tabla button{
    border: none;
    background-color: #FFCB05;
    color: white;
    padding: .5rem 1rem;
    border-radius: .3rem;
}
</style>