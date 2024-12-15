<template>
  <div class="flex items-center justify-between border border-gray-200 w-full rounded-lg p-5">
    <el-image :src="image" :alt="image" fit="cover" :lazy="true" />
    <div class="flex flex-col items-center justify-center gap-2">
      <p class="text-lg">
        <b>{{ name }}</b>
      </p>

      <p class="text-lg">
        <b>{{ formatMoney(price) }}</b>
      </p>

      <button
        @click="handleClick"
        class="py-2 px-3 border border-neutral-200 rounded-lg active:bg-neutral-400 my-5"
      >
        Sepete Ekle
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

export interface Product {
  categoryID: number | undefined
  image: string | undefined
  productID: number | undefined
  name: string | undefined
  price: number | undefined
}

interface Props {
  product: Product
}

const props: Props = defineProps<Props>()
const emit = defineEmits(['add-to-cart'])
const { image, price, name } = props.product

// lifecycle hooks
onMounted(() => {
  console.log('mounted')
  console.log('props', props)
})

onUnmounted(() => {
  console.log('beforeUnmount')
})

// reactive variables
const count = ref(0)

// computed variables
const double = computed(() => count.value * 2)

// watchers
watch(count, (newVal, oldVal) => {
  console.log('count changed', newVal, oldVal)
})

watch(props, (newVal, oldVal) => {
  console.log('double changed', newVal, oldVal)
})

// methods
const handleClick = () => {
  emit('add-to-cart', props.product)
}

const formatMoney = (price: number | undefined) => {
  if (!price) return 0
  return price.toFixed(2) + '  ₺'
}
</script>
