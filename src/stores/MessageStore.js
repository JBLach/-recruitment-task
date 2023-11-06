import { defineStore } from 'pinia';
import axios from 'axios';

export const useMessageStore = defineStore('messageStore', {
  state: () => ({
    messages: [],
    error: null,
    message: null
  }),
  actions: {
    displayError(message) {
      this.error = message;
      setTimeout(() => {
        this.error = null;
      }, 3000);
    },
    async fetchMessageByUuid(uuid) {
      try {
        const response = await axios.get(
          `http://rekrutacja-dev.multiplay.pl/api/message/${uuid}`
        );
        this.message = response.data;
        this.error = null;
      } catch (error) {
        console.error(error.message);
        this.displayError('Nie można znaleźć wiadomości o podanym UUID.');
        this.message = null;
      }
    },

    async fetchMessages(sortBy, order) {
      try {
        const response = await axios.get(
          `http://rekrutacja-dev.multiplay.pl/api/messages?sortBy=${sortBy}&order=${order}`
        );
        this.messages = response.data;
      } catch (error) {
        console.error(error.message);
        this.displayError('Wystąpił błąd przy pobieraniu wiadomości.');
      }
    },
    async sendMessage(newMessage) {
      try {
        const response = await axios.post(
          'http://rekrutacja-dev.multiplay.pl/api/message', {message: newMessage}
        );
        console.log(response)
        this.responseMessage = response.data.uuid;
        this.error = null;
      } catch (error) {
        console.error(error);
        this.displayError('Wystąpił błąd przy wysyłaniu wiadomości.');
        // this.displayError(error.message);
        this.responseMessage = null;
      }
    }
  }
});