<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid : nameValidity === 'invalid'}">
      <label for="user-name">Your Name</label>
      <p v-if="nameValidity === 'invalid'" class="error">Enter a valid name!</p>
      <input id="user-name" name="user-name" type="text" v-model.trim="userName" @blur="checkValidity(userName, 'nameValidity')" />
    </div>
    <div class="form-control" :class="{ invalid : ageValidity === 'invalid'}">
      <label for="age">Your Age (Years)</label>
      <p v-if="ageValidity === 'invalid'" class="error">Enter a valid age!</p>
      <input id="age" name="age" type="number" v-model.trim="userAge" @blur="checkValidity(userAge, 'ageValidity')" />
    </div>
    <div class="form-control" :class="{ invalid : referrerValidity === 'invalid'}">
      <label for="referrer">How did you hear about us?</label>
      <p v-if="referrerValidity === 'invalid'" class="error">Please select a valid option!</p>
      <select id="referrer" name="referrer" v-model="referrer" @change="checkValidity(referrer, 'referrerValidity')">
        <option value="select">Select</option>
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <p v-if="interestsValidity === 'invalid'" class="error">Please select from below!</p>
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interests" @change="checkValidity(interests, 'interestsValidity')" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tutorials" v-model="interests" @change="checkValidity(interests, 'interestsValidity')" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="nothing" v-model="interests" @change="checkValidity(interests, 'interestsValidity')" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <p v-if="howValidity === 'invalid'" class="error">Please select from below!</p>
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="how" @change="checkValidity(how, 'howValidity')" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="blogs" v-model="how" @change="checkValidity(how, 'howValidity')"/>
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="how" @change="checkValidity(how, 'howValidity')"/>
        <label for="how-other">Other</label>
      </div>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        userName: '',
        userAge: null,
        referrer: 'select',
        interests: [],
        how: null,
        nameValidity: null,
        ageValidity: null,
        referrerValidity: null,
        interestsValidity: null,
        howValidity: null,
      }
    },
    methods: {
      validateFormData() {
        if(this.userName === '' || /^[a-zA-Z0-9]{1,3}$/.test(this.userName)) {
          this.nameValidity = 'invalid';
        } else {
          this.nameValidity = 'valid';
        }

        if(this.userAge === '' || this.userAge <= 0) {
          this.ageValidity = 'invalid';
        } else {
          this.ageValidity = 'valid';
        }

        if(this.referrer === 'select') {
          this.referrerValidity = 'invalid';
        } else {
          this.referrerValidity = 'valid';
        }

        if(this.interests.length === 0) {
          this.interestsValidity = 'invalid';
        } else {
          this.interestsValidity = 'valid';
        }

        if(!this.how) {
          this.howValidity = 'invalid';
        } else {
          this.howValidity = 'valid';
        }

        const formValidity = 
          this.nameValidity === 'valid' &&
          this.ageValidity === 'valid' &&
          this.referrerValidity === 'valid' &&
          this.interestsValidity === 'valid' &&
          this.howValidity === 'valid'

        console.log('Let us validate the form data before submission.')
        return formValidity;
      },
      submitForm() {
        let isValid = this.validateFormData();
        if(isValid) {
          console.log('Name: %s', this.userName);
          this.userName = '';
          console.log('Age: ', this.userAge);
          console.log('Type of age: ', typeof(this.userAge));
          this.userAge = null;
          console.log('Heard about us through: ', this.referrer);
          this.referrer = 'select';
          console.log('Interests: ', this.interests);
          this.interests = [];
          console.log('Learning method: ', this.how);
          this.how = null;
        }
      },
      checkValidity(what, whatValidity) {
        if(what === '' || what === null || what <= 0  || what === 'select' || what.lenght === 0 || !what) {
          this[whatValidity] = 'invalid';  //this[whatValidity] we used dynamic value, this.whatValidity won't work since we don't the the value
        } else {
          this[whatValidity] = 'valid';
        }
      }
    },
  }
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}

.invalid input, .invalid select {
  border: 1px solid red;
}
p.error {
  font-size: 12px;
  color: red;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
}
</style>