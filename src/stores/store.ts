import { ref, computed, onMounted, onUnmounted } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const windowWidth = ref(window.innerWidth);
  const windowHeight = ref(window.innerHeight);
  const isMobile = computed(() => windowWidth.value < 640);
  const isTablet = computed(
    () => windowWidth.value >= 640 && windowWidth.value < 1024
  );
  const isDesktop = computed(() => windowWidth.value >= 1024);

  function updateWindowSize() {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  }

  onMounted(() => {
    window.addEventListener("resize", updateWindowSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateWindowSize);
  });

  return { isMobile, isTablet, isDesktop };
});
