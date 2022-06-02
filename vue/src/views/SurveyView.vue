<template>
<PageComponent>
  <template v-slot:header>
    <div class="flex items-center justify-between">
      <h1 class="text-3xl font-bold text-gray-900">
        {{model.id ? model.title : 'Create a Survey'}}
      </h1>
    </div>
  </template>
  <form @submit.prevent="saveSurvey">
    <div class="shadow sm:rounded-md sm:overflow-hidden">
      <!-- Survey Fields -->
      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
        <div>
          <label for="image" class="block text-sm font-medium text-gray-700">
            Image
          </label>
          <img v-if="model.image" :src="model.image" :alt="model.title" class="w-64 h-48 object-cover">
        </div>
        <div>
                <div class="mt-1 flex items-center">
                  <span class="h-10 w-10 rounded-full overflow-hidden bg-gray-100 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-300 w-[80%] h-[80%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
              <button type="button" class="relative overflow-hidden ml-2 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                <input type="file"
                id="image"
                name="image"
                class="absolute h-full w-full top-0 left-0 bottom-0 right-0 opacity-0 cursor-pointer"/>
                Change
              </button>
                </div>
        </div>
        <div class="mt-6">
          <label for="title" class="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input id="title" autocomplete="survey_title" name="text" v-model="model.title" type="text" class="mt-1 focus:ring-2 focus:ring-offset-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Title">
        </div>
        <div class="mt-6">
          <label for="description" class="block text-sm font-medium text-gray-700">
            Description
          </label>
          <div class="mt-1">
            <textarea id="description" autocomplete="survey_description" v-model="model.description" class="focus:ring-2 focus:ring-offset-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Describe your survey" rows="3" aria-autocomplete="survey_description"/>
          </div>
        </div>
        <div>
           <label for="expire_date" class="block text-sm font-medium text-gray-700">Expire Date</label>
          <input type="date" name="expire_date" id="expire_date" v-model="model.expire_date" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>

        <div class="flex items-start">
          <div class="h-5 flex items-center">
            <input type="checkbox" name="status" id="status" v-model="model.status" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"/>
          </div>
          <div class="ml-3 text-sm">
            <label for="status" class="font-medium text-gray-700">Active</label>
          </div>
        </div>

        <!-- Survey Fields -->
<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
<h3 class="text-2xl font-semibold flex items-center justify-between">
Questions
<button type="button" class="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700 transition-colors">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
  </svg>
Add Question
</button>
</h3>
<!-- Add New Button -->
<div v-if="!model.questions.length" class="text-center text-gray-600">
  You don't have any questions created.
</div>
<div v-for="(question, index) in model.questions"
:key="question.id"
>
  <QuestionEditor :question="question" :index="index" @change="questionChange" @addQuestion="addQuestion" @deleteQuestion="deleteQuestion"/>
</div>
</div>
        <!-- Submit Button -->
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit">
            Save
          </button>
        </div>
      </div>
    </div>
  </form>
</PageComponent>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue';
import QuestionEditor from '../components/editor/QuestionEditor.vue';
import {ref} from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
const route = useRoute();
let model = ref({
      title: '',
      description: '',
      status: false,
      image:null,
      expire_date:null,
      questions:[]
});

if(route.params.id) model.value = store.state.surveys.find(s => s.id == route.params.id);


</script>

<style>

</style>
