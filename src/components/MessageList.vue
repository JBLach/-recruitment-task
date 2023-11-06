<template>
  <div>
    <div class="flex justify-center items-center flex-wrap gap-4 mb-4">
      <button
        class="shadow-lg border border-indigo-500 bg-indigo-500 text-white rounded-full h-16 px-4 py-2 hover:bg-transparent hover:text-indigo-500 transition-colors duration-200"
        @click="fetchMessages('uuid', 'ASC')"
      >
        Sortuj po UUID rosnąco
      </button>
      <button class="shadow-lg border border-pink-500 bg-pink-500 text-white rounded-full h-16 px-4 py-2 hover:bg-transparent hover:text-pink-500 transition-colors duration-200" @click="fetchMessages('uuid', 'DESC')">
        Sortuj po UUID malejąco
      </button>
      <button class="shadow-lg border border-sky-500 bg-sky-500 text-white rounded-full h-16 px-4 py-2 hover:bg-transparent hover:text-sky-500 transition-colors duration-200" @click="fetchMessages('timestamp', 'ASC')">
        Sortuj po czasie rosnąco
      </button>
      <button class="shadow-lg border border-teal-500 bg-teal-500 text-white rounded-full h-16 px-4 py-2 hover:bg-transparent hover:text-teal-500 transition-colors duration-200" @click="fetchMessages('timestamp', 'DESC')">
        Sortuj po czasie malejąco
      </button>
    </div>

    <transition name="fade">
      <div v-if="error" class="fixed top-4 right-4 z-50">
        <div class="bg-red-500 text-white p-4 rounded-lg shadow-lg">
          {{ error }}
        </div>
      </div>
    </transition>
    <ul class="rounded-xl p-6 shadow-xl max-h-[514px] overflow-auto">
      <li class="relative border shadow-xl p-6 rounded-xl mb-8 last:mb-0" v-for="message in messages" :key="message.uuid">
        <!-- <span>{{ message.uuid }}</span> -->
        {{ message.message }}
        <span class="border bg-teal-400 border-teal-400 text-white font-semibold shadow-md rounded-lg absolute p-2 -right-3 -top-3">
          {{ new Date(message.timestamp).toLocaleString() }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useMessageStore } from '../stores/MessageStore';

export default {
  setup() {
    const messageStore = useMessageStore();
    messageStore.fetchMessages('timestamp', 'ASC');

    const messages = computed(() => messageStore.messages);
    const error = computed(() => messageStore.error);

    return {
      messages,
      fetchMessages: messageStore.fetchMessages,
      error
    };
  },
};
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
