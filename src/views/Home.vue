<template>
  <div class="home">
    <b-icon-badge4k/>
    <b-row>
      <b-container>
        <Expo msg="Expo Information"/>
      </b-container>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Expo from '@/components/Expo.vue'; // @ is an alias to /src

@Component({
  components: {
    Expo,
  },
})
export default class Home extends Vue {}
</script>
