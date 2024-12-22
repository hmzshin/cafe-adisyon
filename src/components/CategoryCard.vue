<template>
  <div
    class="flex flex-col items-center justify-center border border-gray-200 w-44 rounded-lg p-5"
  >
    <el-image :src="image" :alt="image" fit="cover" :lazy="true" />
    <p class="text-lg">
      <b>{{ name }}</b>
    </p>
    <button
      @click="handleClick"
      class="py-2 px-3 border border-neutral-200 rounded-lg active:bg-neutral-400 my-5"
    >
      Görüntüle
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from "vue";

export interface Category {
  id: number | null;
  image: string | null;
  name: string | null;
}

interface Props {
  category: Category;
}

const props: Props = defineProps<Props>();
const emit = defineEmits(["select"]);
const { image, name } = props.category;

// lifecycle hooks
onMounted(() => {
  console.log("mounted");
  console.log("props", props);
});

onUnmounted(() => {
  console.log("beforeUnmount");
});

// reactive variables
const count = ref(0);

// computed variables
const double = computed(() => count.value * 2);

// watchers
watch(count, (newVal, oldVal) => {
  console.log("count changed", newVal, oldVal);
});

watch(props, (newVal, oldVal) => {
  console.log("double changed", newVal, oldVal);
});

// methods
const handleClick = () => {
  emit("select", props.category);
};
</script>
