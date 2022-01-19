<template>
  <div class="container">
  <div class="row">
    <div class="col-12">
      <h1> {{msg}} </h1>
    </div>
  </div>
    <div class="row">
      <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Message: " 
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.beaconId"
          placeholder="Beacon Id"
          required
        ></b-form-input>
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Beacon Name"
          required
        ></b-form-input>
        <b-form-input
          id="input-1"
          v-model="form.expoID"
          placeholder="Expo Id"
          required
        ></b-form-input>
        <b-form-input
          id="input-1"
          v-model="form.message"
          placeholder="Message"
          required
        ></b-form-input>
        <b-form-input
          id="input-1"
          v-model="basicAuthHeader"
          placeholder="Auth Key"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    </div>
    <b-card class="mt-3" header="Payload to send to the api">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    <b-alert  variant="success" 
              dismissible 
              :show="showAlert"
              @dismissed="showAlert=false">
      {{alertMessage}}
    </b-alert>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Exhibit from '../models/Exhibit'

@Component
export default class Expo extends Vue {
  @Prop() private msg!: string;

  private show: boolean = true
  private showAlert: boolean = false;
  private alertMessage: string = '';
  private basicAuthHeader = 'shawnmurtagh';
  private form: Exhibit = {
    beaconId:"",
    name:"",
    expoID:0,
    message:""
    }

  public async onSubmit (event: any): Promise<any>{
    event.preventDefault();
    const response = await fetch("http://localhost:8080/exhibits", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.basicAuthHeader
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(this.form) // body data type must match "Content-Type" header
    });

    console.debug(response);

    const json = (await response.json()) || {};
    if (!response.ok) {
      const errorMessage = json.error
        ? json.error.error || json.error
        : response.status;
      throw new Error(errorMessage);
    }

    this.alertMessage = 'Beacon saved successfully.';
    this.showAlert = true;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
