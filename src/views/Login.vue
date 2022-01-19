<template>
    <FormulateForm v-model="loginForm">
        <FormulateForm
            v-model="form"
            :schema="schema"
            @submit="onSubmit"
        />
    </FormulateForm>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { Axios } from 'axios';

export default class Login extends Vue {
    private form: any = {}
    private schema: any[] = [
        {
          type: 'text',
          name: 'username',
          label: 'Username',
          validation: 'required',
        },
        {
          type: 'password',
          name: 'password',
          label: 'Password',
          validation: 'required',
          validationName: 'Password confirmation'
        },
        {
          type: 'submit',
          label: 'Login'
        }
      ];

      private async onSubmit(loginData: any): Promise<void>{
        await Axios.prototype.post('http://localhost:8081/auth', loginData);
        alert(`Thank you, ${loginData.username}`);
      }
}
</script>