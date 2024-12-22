<template>
  <div class="h-full">
    <div
      class="lg:h-[40vh] h-[50vh] w-full relative bg-hero-pattern bg-cover bg-center"
    ></div>

    <div class="flex items-center justify-evenly gap-4 flex-wrap px-6">
      <CategoryCard
        v-for="(item, index) in categoryList"
        :key="index"
        :category="item"
        @select="handleSelection"
      />
    </div>

    <el-dialog
      :width="dialogWidth"
      top="5vh"
      v-model="isDialogVisible"
      align="center"
    >
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
        <div class="flex justify-center">
          <el-button
            type="danger"
            size="default"
            class="mr-3"
            @click="isDialogVisible = false"
          >
            Kapat
          </el-button>
        </div>
      </template>
    </el-dialog>

    <el-drawer
      v-model="isCartVisible"
      direction="btt"
      size="50%"
      :z-index="100"
    >
      <template #header>
        <h6 class="text-2xl text-center">Sepetim</h6>
      </template>

      <div class="flex flex-col gap-2 h-4/5 mb-2">
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
            <div
              class="w-10 flex items-center justify-center border h-full bg-neutral-100"
            >
              {{ item.count }}
            </div>
            <div
              class="w-10 flex items-center justify-center h-full bg-primary-color text-white rounded-r-md"
              @click="removeFromCart(item.product)"
            >
              <Icon icon="mdi-minus" />
            </div>
          </div>
          <el-button
            circle
            type="danger"
            class="w-1/5"
            @click="deleteFromCart(item.product)"
          >
            <Icon icon="mdi-close" />
          </el-button>
        </div>
      </div>
    </el-drawer>

    <el-card
      class="fixed bottom-0 left-0 w-full h-20 z-[2000]"
      v-if="cart.length > 0"
    >
      <div class="flex items-center justify-between relative mt-3">
        <div
          class="absolute left-0 -top-[20px] flex items-center gap-2"
          @click="handleCardVisibility"
        >
          <span class="text-xs">{{
            isCartVisible ? "Detayları Gizle" : "Detayları Göster"
          }}</span>
          <Icon v-if="!isCartVisible" icon="ic:baseline-keyboard-arrow-up" />
          <Icon v-else icon="ic:baseline-keyboard-arrow-down" />
        </div>

        <p class="text-left text-md">
          Toplam Tutar: <b>{{ totalPrice }}</b>
        </p>
        <el-button @click="displayCart" type="success" class="px-2"
          >Sipariş Ver</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import CategoryCard, { type Category } from "@/components/CategoryCard.vue";
import type { Product } from "@/components/ProductCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import { ref, computed, watch, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import { useStore } from "@/stores/store";
import { ElMessage } from "element-plus";
import { formatMoney } from "@/functions";
import { axiosInstance } from "@/api/axiosInstance";

interface CartItem {
  count: number;
  product: Product;
}

const store = useStore();
const isDialogVisible = ref(false);
const selectedCategory = ref<Category>({
  image: null,
  name: null,
  id: null,
});

// lifecycle hooks
onMounted(() => {
  fetchAllCategories();
});

onUnmounted(() => {
  console.log("beforeUnmount");
});

// reactive variables
const categoryList = ref<Array<Category>>([]);
const productList = ref<Array<Product>>([]);
const cart = ref<Array<CartItem>>([]);
const isCartVisible = ref(false);

// computed variables
const dialogWidth = computed(() => {
  return store.isMobile ? "90%" : store.isTablet ? "70%" : "50%";
});

const totalPrice = computed(() => {
  const total = cart.value.reduce((acc: number, item: CartItem) => {
    return acc + (item.product.price || 0) * item.count;
  }, 0);
  return formatMoney(total);
});

// watchers
watch(categoryList, (newVal, oldVal) => {
  console.log("categoryList changed", newVal, oldVal);
});

watch(cart, (newVal, oldVal) => {
  if (newVal.length === 0) {
    isCartVisible.value = false;
  }
});

// methods

const handleSelection = (category: Category) => {
  selectedCategory.value = category;
  isDialogVisible.value = true;
  getCategoryProductList(category.id);
};

const getCategoryProductList = async (categoryId: number | null) => {
  try {
    const response = await axiosInstance.get(`/category/${categoryId}`);
    const { data } = response.data;
    productList.value = data.products;
  } catch (error) {
    ElMessage({
      message: "Ürünler listelenirken bir hata oluştu! Lütfen tekrar deneyin.",
      type: "error",
    });
  }
};

const isProductExistInCart = (product: Product) => {
  return cart.value.find((item) => item.product.id === product.id)
    ? true
    : false;
};

const addToCart = (product: Product) => {
  try {
    if (!isProductExistInCart(product)) {
      cart.value.push({
        count: 1,
        product: product,
      });
    } else {
      const index = cart.value.findIndex(
        (item) => item.product.id === product.id
      );
      const count = cart.value[index].count;
      cart.value[index].count = count + 1;
    }

    console.log("cart", cart.value);

    ElMessage({
      message: `${product.name} sepete eklendi!`,
      type: "success",
    });
  } catch (error) {
    ElMessage({
      message: `${product.name} sepete eklenirken bir hata oluştu!`,
      type: "error",
    });
  }
};

const removeFromCart = (product: Product) => {
  try {
    if (!isProductExistInCart(product)) {
      throw new Error("Ürün sepetinizde bulunmamaktadır!");
    }

    const index = cart.value.findIndex(
      (item) => item.product.id === product.id
    );
    const count = cart.value[index].count;

    if (count !== 1) {
      cart.value[index].count = count - 1;
    } else {
      cart.value = cart.value.filter((item) => item.product.id !== product.id);
    }
    ElMessage({
      message: `${product.name} sepetten çıkarıldı!`,
      type: "warning",
    });
  } catch (error: any) {
    ElMessage({
      message: error.message,
      type: "error",
    });
  }
};

const deleteFromCart = (product: Product) => {
  cart.value = cart.value.filter((item) => item.product.id !== product.id);
};

const displayCart = () => {
  isCartVisible.value = true;
};

const handleCardVisibility = () => {
  isCartVisible.value = !isCartVisible.value;
};

const fetchAllCategories = async () => {
  try {
    const response = await axiosInstance.get("/category");
    categoryList.value = response.data.data;
  } catch (error) {
    ElMessage({
      message:
        "Kategoriler listelenirken bir hata oluştu! Lütfen tekrar deneyin.",
      type: "error",
    });
  }
};
</script>

<style scoped></style>
