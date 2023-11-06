<template>
  <div class="mb-4">
    <div class="relative w-full">
      <input
        type="text"
        v-model="messageText"
        placeholder="Dodaj wiadomość"
        class="rounded-full border h-16 p-6 text-sm w-full"
      />
      <button
        @click="send"
        type="button"
        class="bg-blue-800 px-4 py-2 text-white font-bold rounded-full absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        Wyślij
      </button>
    </div>
    <div v-if="messageStore.responseMessage">ID wiadomości: {{ messageStore.responseMessage }}</div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useMessageStore } from '../stores/MessageStore';

export default {
  setup() {
    const messageText = ref('');
    const messageStore = useMessageStore();

    const send = () => {
      messageStore.sendMessage(messageText.value);
      messageText.value = '';
    };

    return {
      messageText,
      messageStore,
      send
    };
  },
};
</script>
