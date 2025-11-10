<template>
  <div class="register-container">
    <div class="register-card">
      <h2>Register</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" v-model="name" id="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
      <p v-if="success" class="success-message">{{ success }}</p>
      <p class="login-link">
        Already have an account? <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import apiClient from '../api'; // Import the new api client

const name = ref('');
const email = ref('');
const password = ref('');
const error = ref('');
const success = ref('');
const router = useRouter();

const handleRegister = async () => {
  error.value = '';
  try {
    const response = await apiClient.post('/auth/register', {
      name: name.value,
      email: email.value,
      password: password.value,
    });

    if (response.status === 201) {
      router.push('/login');
    } else {
      const data = response.data;
      error.value = data.message || 'Registration failed';
    }
  } catch (err) {
    error.value = err.response?.data?.message || 'An error occurred during registration.';
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.register-card {
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
}

input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #4f46e5;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #4f46e5;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #4338ca;
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 1.5rem;
}

.success-message {
  color: #22c55e;
  font-size: 0.875rem;
  margin-top: 1.5rem;
}

.login-link {
  font-size: 0.875rem;
  margin-top: 1.5rem;
  color: #555;
}

.login-link a {
  color: #4f46e5;
  font-weight: 600;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>