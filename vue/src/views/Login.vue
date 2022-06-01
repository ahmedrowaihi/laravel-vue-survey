<template>
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ ' ' }}
          <router-link :to="{name:'Register'}" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit="login">
      <div v-if="errorMsg" class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded">
       {{errorMsg}}.
       <span @click="errorMsg=''" class="cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 p-1 flex items-center justify-center rounded-full transition-colors hover:bg-[rgba(0,0,0,0.2)]" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
       </span>
      </div>
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" v-model="user.email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" v-model="user.password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember" name="remember" type="checkbox" v-model="user.remember" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember" class="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>
        </div>

        <div>
          <button :disabled='loading' type="submit" class="transition-colors group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon :class="loading && 'animate-spin'" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
        </div>
      </form>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/solid'
import { useRouter } from 'vue-router';
import store  from '../store'
import {ref} from 'vue'
const router = useRouter()



let [errorMsg, loading] = [ref(''), ref(false)]
const user = {
  email: '',
  password: '',
  remember : false
};

function login(e) {
  e.preventDefault();
  loading.value = true;
  store.dispatch('login', user).then(() => {
    router.push({ name: 'Dashboard' });
  }).catch((err) => {
    errorMsg.value = err?.response?.data?.error
  }).finally(() => {
    loading.value = false;
  })
}
</script>
