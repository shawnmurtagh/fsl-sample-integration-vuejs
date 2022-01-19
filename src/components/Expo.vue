<template>
  <b-container>
    <!-- <b-row>
      <b-form @submit="onSubmit" v-if="show">
      
        <b-form-row>
          <b-form-input
          id="input-1"
          v-model="form.subscriptionKey"
          placeholder="Subscription-Key Header"
          required
          ></b-form-input>
        </b-form-row>
        <b-form-row></b-form-row>
        <b-form-input class="col-12"
          id="input-1"
          v-model="form.bearerToken"
          placeholder="Bearer Token"
          required
        ></b-form-input>
        <b-form-group
        id="input-group-1"
        label="" 
        label-for="input-1">
        <template #prepend>
          
        </template>
        <b-form-row>
          <b-col cols="1">
            <b-dropdown
            id="dropdown-1"
            v-model="form.method"
            placeholder="HttpMethod"
            required
            >
              <template #button-content>
                {{form.method}}
              </template>
              <b-dropdown-item v-for="option in options" :key="option" @click="form.method = option">{{option}}</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item disabled>DELETE</b-dropdown-item>
            </b-dropdown>
          </b-col>
          <b-col cols="6">{{url}}</b-col>
          <b-col cols="5">
            <b-form-input
            id="input-1"
            v-model="form.endpoint"
            placeholder="route"
            required
            ></b-form-input>
          </b-col>
        </b-form-row>
      </b-form-group>
        
        <b-form-textarea
          id="input-1"
          v-model="form.payload"
          placeholder="Payload"
          rows="6"
          max-rows="6"
        ></b-form-textarea>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    </b-row> -->
    <b-button @click="login" variant="primary">Login</b-button>
    <div>response: {{response}}</div>
    <b-alert  variant="success" 
              dismissible 
              :show="showAlert"
              @dismissed="showAlert=false">
      {{alertMessage}}
    </b-alert>
  </b-container>
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
  private form: any = {
    subscriptionKey:"",
    bearerToken:"",
    endpoint:"",
    method:"GET",
    payload:""
    }
  private options: string[] = ['GET', 'PATCH', 'POST']
  private url: string = 'https://dev-api.foundationsoft.com/foundation/v1/'

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
