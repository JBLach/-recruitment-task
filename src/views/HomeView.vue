<script setup>
import MessageActions from '../components/MessageActions.vue';
import MessageList from '../components/MessageList.vue';
import MessageGetItem from '../components/MessageGetItem.vue';

</script>

<template>
  <main>
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-5 gap-6">
        <div class="col-span-5 lg:col-span-2">
          <MessageActions />
          <MessageGetItem />
        </div>
        <div class="col-span-5 lg:col-span-3">
          <MessageList />
        </div>
      </div>
    </div>
  </main>
</template>
