<template>
  <aside class="bg-primary rounded p-3 d-flex flex-column justify-content-between">
    <img
      alt="Logo"
      src="/images/logo.svg"
    />
    <nav>
      <ul class="list-unstyled m-0 mt-4">
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
    </nav>
    <ul class="list-unstyled m-0 p-0">
      <li>
        <button class="btn btn-link text-white text-decoration-none">Logout</button>
      </li>
    </ul>
  </aside>
</template>
