<template>
<div class="container">
    <br>
    <div class="row">
        <b-form @submit="onSubmit" v-if="show" :validated="form.validated">
        <b-card title="Inscription">
       
            <b-form-group  id="label-name"
                label="Nom :"
                label-for="name">
                <b-form-input id="name"
                type="text"
                v-model="form.name"
                required>
                </b-form-input>
            </b-form-group>

            <b-form-group  id="label-firstname"
                label="Prénom :"
                label-for="firstname">
                <b-form-input id="firstname"
                type="text"
                v-model="form.firstname"
                required>
                </b-form-input>
            </b-form-group>
      
        <b-form-group id="label-email"
            label="E-mail :"
            label-for="email">
            <b-form-input id="email"
                type="email"
                v-model="form.email"
                placeholder="Entrer votre e-mail"
                required>
            </b-form-input>
        </b-form-group>

        <b-form-group id="label-password"
            label="Mot de passe :"
            label-for="password">
            <b-form-input id="password"
                type="password"
                v-model="form.password"
                required>
            </b-form-input>
        </b-form-group>

        <b-form-group id="label-password-confirmation"
            label="Confirmer votre mot de passe :"
            label-for="password-confirmation"
            :invalid-feedback="invalidFeedback"
            :valid-feedback="validFeedback"
            :state="state">
            <b-form-input 
                id="password-confirmation"
                type="password"
                v-model="form.passwordConfirmation"
                :state="state"
                required>
            </b-form-input>
        </b-form-group>
      
        <b-card bg-variant="light">
            <b-form-group id="label-address"
                label="Adresse :"
                label-for="address">
                <b-form-input id="address"
                type="text"
                v-model="form.address"
                required>
            </b-form-input>            
            </b-form-group>

            <b-form-group id="label-zip"
                label="NPA :"
                label-for="zip">
                <b-form-input id="zip"
                type="number"
                v-model="form.zip"
                required>
            </b-form-input>            
            </b-form-group>
        </b-card>
          <b-form-group id="label-phone-number"
            label="Téléphone :"
            label-for="phone-number">
            <vue-tel-input 
                v-model="form.phoneNumber"
                placeholder="Entrez votre téléphone"
                :preferredCountries="['ch', 'fr']"
                >
            </vue-tel-input>
        </b-form-group>
        <br>
        <b-button type="submit" variant="primary">S'enregistrer</b-button>
                </b-card>

    </b-form>
    <br>
    </div>
    <h1>{{message_info}}</h1>

</div>
</template>

<script>

export default {
  name: "register",
  data() {
    return {
        message_info :"",
      form: {
        validated: false,
        firstname: "",
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
        descriptionPassword: "",
        phoneNumber: "",
        address: "",
        zip: ""
      },
      show: true
    };
  },
  computed: {
    state() {
      return this.form.passwordConfirmation === this.form.password &&
        this.form.password !== ""
        ? true
        : false;
    },
    invalidFeedback() {
      if (this.form.passwordConfirmation !== this.form.password) return "c fo";
      else return "retape tn mdp stp";
    },
    validFeedback() {
      if (this.state) {
        this.form.validated = true;
        return "C tt bn";
      } else {
        return "";
      }
    }
  },

  methods: {
    onSubmit(evt) {
      $.ajax({
        type: "POST",
        body: {
          firstname: this.form.firstname,
          name: this.form.name,
          email: this.form.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation,
          address: this.form.address,
          zip: this.form.zip
        },
        url: "http://192.168.0.105/ge-emprunte-site/backend/public/api/auth/register",
        success : function(data){            
            //this.message_info = data;
            console.log(data);
        },
        error : function(request){
            this.message_info = request[status];    
        }

      });

      evt.preventDefault();

      alert(JSON.stringify(this.form));
    }
  }
};
</script>

