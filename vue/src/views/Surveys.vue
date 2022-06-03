<template>
    <PageComponent>
      <template v-slot:header>
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
          <router-link
          :to="{name: 'SurveyCreate'}"
          class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600 transition-colors"
          >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -mt-1 inline-block" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
          Add new Survey
          </router-link>
        </div>
      </template>
      <div v-if="surveys.loading" class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
<!-- Loader -->
<div v-for="(a, ind) in ['1','2','3']" :key="a"
:style="{ animationDelay: `${ind * 0.1}s` }"
class="border shadow rounded-md p-4 max-w-sm w-full mx-auto h-[470px] opacity-0 animate-fade-in-down transition-all">
  <div class="animate-pulse space-y-4">
    <div class="bg-slate-200 w-full h-48"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="grid grid-cols-3 gap-4">
        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
        </div>
        <div class="h-2 bg-slate-200 rounded"></div>
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
        </div>
        <div class="h-2 bg-slate-200 rounded"></div>
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
        </div>
        <div class="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>
<!-- Loader -->
      </div>
     <div v-else-if="surveys.data.length">
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        <SurveyListItem
          v-for="(survey, ind) in surveys.data"
          :key="survey.id"
          :survey="survey"
          class="opacity-0 animate-fade-in-down transition-all"
          :style="{ animationDelay: `${ind * 0.1}s` }"
          @delete="deleteSurvey(survey)"
        />
      </div>
      <div class="flex justify-center mt-5">
        <nav
          class="relative z-0 inline-flex justify-center rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <a
            v-for="(link, i) of surveys.links"
            :key="i"
            :disabled="!link.url"
            href="#"
            @click="getForPage($event, link)"
            aria-current="page"
            class="relative inline-flex items-center px-4 py-2 border text-sm font-medium whitespace-nowrap"
            :class="[
              link.active
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 transition-colors',
              i === 0 ? 'rounded-l-md bg-gray-100 text-gray-700' : '',
              i === surveys.links.length - 1 ? 'rounded-r-md' : '',
            ]"
            v-text="link.label"
          >
          </a>
        </nav>
      </div>
    </div>
    <div v-else class="text-gray-600 text-center py-16">
      Your don't have surveys yet
    </div>
</PageComponent>

</template>

<script setup>
import PageComponent from '../components/PageComponent.vue'
import store from '../store'
import {computed} from 'vue'
import SurveyListItem from '../components/SurveyListItem.vue';

const surveys = computed(() => store.state.surveys);

store.dispatch("getSurveys");


function deleteSurvey(survey) {
  if (confirm(`Are you sure you want to delete this survey? Operation can't be undone!!`)) store.dispatch("deleteSurvey", survey.id).then(() => store.dispatch("getSurveys"));
}

function getForPage(ev, link) {
  ev.preventDefault();
  if (!link.url || link.active) {
    return;
  }
  store.dispatch("getSurveys", { url: link.url });
}
</script>

<style>
</style>
