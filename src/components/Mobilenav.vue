<template>
  <nav class="col-12">
    <div class="navbar navbar-dark bg-primary rounded w-100 d-flex p-4">
      <router-link
        class="navbar-brand"
        to="/"
      >
        <img
          alt="Logo"
          src="/images/logo.svg"
          style="width: 150px; height: auto;"
        />
      </router-link>
      <button
        class="navbar-toggler p-0 fs-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark bg-primary"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5
            class="offcanvas-title"
            id="offcanvasDarkNavbarLabel"
          >
            Code Insights
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="p-2">
              <router-link
                to="#"
                class="text-decoration-none text-white"
              >
                Dashboard
              </router-link>
            </li>
            <li class="p-2">
              <router-link
                to="/ranking"
                class="text-decoration-none text-white"
              >
                Ranking
              </router-link>
            </li>
            <li class="p-2">
              <router-link
                to="/tickets"
                class="text-decoration-none text-white"
              >
                Tickets
              </router-link>
            </li>
            <li class="p-2">
              <router-link
                to="/merge-requests"
                class="text-decoration-none text-white"
              >
                Merge Requests
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
</script>
