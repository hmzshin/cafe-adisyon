<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <Icon icon="mdi-light:home" class="mr-2" /> Burası Şirket isim ve logosu
        olacak
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Giriş Yap
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="userName"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Kullanıcı Adı</label
              >
              <input
                name="userName"
                id="email"
                v-model="loginForm.userName"
                class="formInput"
                placeholder="Kullanıcı adınızı girin"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Şifre</label
              >
              <input
                type="password"
                name="password"
                id="password"
                v-model="loginForm.password"
                placeholder="••••••••"
                class="formInput"
              />
            </div>
            <div></div>
          </form>
          <button @click="login" class="submitBtn">Giriş Yap</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";

const loginForm = reactive({ userName: "", password: "", isRemember: false });
const router = useRouter();

const login = () => {
  router.push("/dashboard");
};
</script>

<style scoped></style>
