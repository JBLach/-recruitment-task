<template>
  <div>
    <h2 class="text-xl font-bold text-center mb-2">
      Wyszukaj wiadomości po UUID
    </h2>
    <div class="relative w-full mb-6">
      <input
        type="text"
        v-model="uuid"
        placeholder="Wpisz UUID wiadomości"
        class="rounded-full border h-16 p-6 text-sm w-full"
      />
      <button
        @click="fetchMessage"
        type="button"
        class="bg-blue-800 px-4 py-2 text-white font-bold rounded-full absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        Odczytaj
      </button>
    </div>
    <div class="relative rounded-xl px-6 py-8 shadow-xl" v-if="messageStore.message">
      <p>
        Treść wiadomości:
        <span class="italic font-semibold">{{ messageStore.message.message }}</span>
      </p>
      <span
        class="border bg-teal-400 border-teal-400 text-white font-semibold shadow-md rounded-lg absolute p-2 -right-3 -top-3"
        >{{ new Date(messageStore.message.timestamp).toLocaleString() }}</span
      >
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useMessageStore } from '../stores/MessageStore';

export default {
  setup() {
    const uuid = ref('');
    const messageStore = useMessageStore();

    const fetchMessage = () => {
      messageStore.fetchMessageByUuid(uuid.value);
    };

    return {
      uuid,
      messageStore,
      fetchMessage,
    };
  },
};
</script>
