<template>
  <div class="bg-white min-h-full h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
    <div class="max-w-max mx-auto">
      <main class="sm:flex">
        <p class="text-4xl font-extrabold text-emerald-500 sm:text-5xl">404</p>
        <div class="sm:ml-6">
          <div class="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 class="text-4xl font-extrabold text-gray-800 tracking-tight sm:text-5xl">Page not found</h1>
            <p class="mt-1 text-base text-gray-400">Please check the URL in the address bar and try again.</p>
          </div>
          <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <router-link :to="{name:'Dashboard'}" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-700 transition-colors hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600">
              Go to the home page
            </router-link>
            <router-link :to="{name:'Dashboard'}" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-emerald-800 bg-emerald-200 transition-colors hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600">
              Go To Dashboard
            </router-link>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
