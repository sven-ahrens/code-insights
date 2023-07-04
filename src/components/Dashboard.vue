<script setup>
  import { onMounted } from 'vue'
  import axios from 'axios'
  import Card from './Card.vue'

  onMounted(async () => {
    const { data } = await axios.get(`https://code01.djumla.de/api/v4/projects`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITLAB_API_KEY}`
      }
    })

    const { data: blub } = await axios.get(`https://code01.djumla.de/api/v4/projects/263/repository/commits?with_stats=true`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITLAB_API_KEY}`
      }
    })

    console.log(data)
  })
</script>

<template>
  <div class="row dashboard__container">
    <div class="col-12 justify-content-md-between d-flex flex-column">
      <div class="row">
        <div class="col-12">
          <Card>
            Hello World
          </Card>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-4">
          <Card>
            Hello World
          </Card>
        </div>
        <div class="col-4">
          <Card>
            Hello World
          </Card>
        </div>
        <div class="col-4">
          <Card>
            Hello World
          </Card>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-6">
          <Card>
            Hello World
          </Card>
        </div>
        <div class="col-6">
          <Card>
            Hello World
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
