<template>
  <div>
    <div class="lg:h-[40vh] h-[50vh] w-full relative bg-hero-pattern bg-cover bg-center"></div>

    <div class="flex items-center justify-evenly gap-4 flex-wrap px-6">
      <CategoryCard
        v-for="(item, index) in categoryList"
        :key="index"
        :category="item"
        @select="handleSelection"
      />
    </div>

    <el-dialog width="90%" top="5vh" v-model="isDialogVisible" align="center">
      <template #header>
        <h6 class="text-2xl">{{ selectedCategory.name }}</h6>
      </template>

      <div class="flex flex-col px-3 gap-2">
        <ProductCard
          v-for="(item, index) in productList"
          :product="item"
          :key="index"
          @add-to-cart="addToCart"
        />
      </div>

      <template #footer>
        <el-button type="primary" size="small" class="mr-3" @click="isDialogVisible = false">
          Kapat
        </el-button>
      </template>
    </el-dialog>

    <el-card class="fixed bottom-0 left-0 w-full" v-if="cart.length > 0">
      <div class="flex flex-col gap-2 mb-2">
        <div
          v-for="(item, index) in cart"
          :key="index"
          class="flex items-center justify-between border p-2 rounded-md w-full"
        >
          <p class="w-2/5">{{ item.product.name }}</p>
          <div class="flex items-center justify-center h-10 w-2/5">
            <div
              class="w-10 flex items-center justify-center h-full bg-primary-color text-white rounded-l-md"
              @click="addToCart(item.product)"
            >
              <Icon icon="mdi-plus" />
            </div>
            <div class="w-10 flex items-center justify-center border h-full bg-neutral-100">
              {{ item.count }}
            </div>
            <div
              class="w-10 flex items-center justify-center h-full bg-primary-color text-white rounded-r-md"
              @click="removeFromCart(item.product)"
            >
              <Icon icon="mdi-minus" />
            </div>
          </div>
          <el-button circle type="danger" class="w-1/5" @click="removeFromCart(item.product)">
            <Icon icon="mdi-close" />
          </el-button>
        </div>
      </div>
      <el-button>Sipariş Ver</el-button>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import CategoryCard, { type Category } from '@/components/CategoryCard.vue'
import type { Product } from '@/components/ProductCard.vue'
import ProductCard from '@/components/ProductCard.vue'
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

interface CartItem {
  count: number
  product: Product
}

const isDialogVisible = ref(false)
const selectedCategory = ref<Category>({
  image: null,
  name: null,
  categoryID: null,
})

// lifecycle hooks
onMounted(() => {
  console.log('mounted')
  console.log('categoryList', categoryList.value)
})

onUnmounted(() => {
  console.log('beforeUnmount')
})

// reactive variables
const categoryList = ref<Array<Category>>([
  { categoryID: 1, image: 'burger.jpg', name: 'Burger' },
  { categoryID: 2, image: 'pizza.jpg', name: 'Pizza' },
  { categoryID: 3, image: 'sushi.jpg', name: 'Sushi' },
])

const productList = ref<Array<Product>>([
  { productID: 1, name: 'Cheeseburger', image: 'cheeseburger.jpg', price: 5.99, categoryID: 1 },
  {
    productID: 2,
    name: 'Pepperoni Pizza',
    image: 'pepperoni_pizza.jpg',
    price: 8.99,
    categoryID: 1,
  },
  {
    productID: 3,
    name: 'California Roll',
    image: 'california_roll.jpg',
    price: 6.99,
    categoryID: 1,
  },
])

const cart = ref<Array<CartItem>>([])

// computed variables

// watchers
watch(categoryList, (newVal, oldVal) => {
  console.log('categoryList changed', newVal, oldVal)
})

// methods

const handleSelection = (category: Category) => {
  selectedCategory.value = category
  isDialogVisible.value = true
  getCategoryProductList()
}

const getCategoryProductList = async () => {
  // TODO write a method for to get the list for selected Category
  try {
  } catch (error) {}
}

const isProductExistInCart = (product: Product) => {
  return cart.value.find((item) => item.product.productID === product.productID) ? true : false
}

const addToCart = (product: Product) => {
  if (!isProductExistInCart(product)) {
    cart.value.push({
      count: 1,
      product: product,
    })
  } else {
    const index = cart.value.findIndex((item) => item.product.productID === product.productID)
    const count = cart.value[index].count
    cart.value[index].count = count + 1
  }
}

const removeFromCart = (product: Product) => {
  if (!isProductExistInCart(product)) return

  const index = cart.value.findIndex((item) => item.product.productID === product.productID)
  const count = cart.value[index].count

  if (count !== 1) {
    cart.value[index].count = count - 1
  } else {
    cart.value = cart.value.filter((item) => item.product.productID !== product.productID)
  }
}
</script>

<style scoped></style>
