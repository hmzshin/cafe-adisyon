<script setup lang="ts">
import { reactive } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter, Router } from "vue-router";
import SignUpForm from "../interfaces/SignUpForm";

const signUpForm: SignUpForm = reactive({
  userName: "",
  password: "",
  name: "",
  surname: "",
  email: "",
  passwordConfirmation: "",
});

const router: Router = useRouter();

const login = (): void => {
  console.log(signUpForm);
  router.push("/");
};
</script>

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
          <form class="space-y-4 md:space-y-6">
            <div>
              <label for="name" class="formInputLabel">Ad</label>
              <input
                name="name"
                id="name"
                type="text"
                v-model="signUpForm.name"
                class="formInput"
                placeholder="Adınızı girin"
              />
            </div>

            <div>
              <label for="surname" class="formInputLabel">Soyad </label>
              <input
                name="surname"
                id="surname"
                type="text"
                v-model="signUpForm.surname"
                class="formInput"
                placeholder="Soyadınızı girin"
              />
            </div>

            <div>
              <label for="email" class="formInputLabel">Eposta </label>
              <input
                name="email"
                id="email"
                type="email"
                v-model="signUpForm.email"
                class="formInput"
                placeholder="Eposta adresinizi girin"
              />
            </div>

            <div>
              <label for="userName" class="formInputLabel">Kullanıcı Adı</label>
              <input
                name="userName"
                id="userName"
                type="text"
                v-model="signUpForm.userName"
                class="formInput"
                placeholder="Kullanıcı adınızı girin"
              />
            </div>
            <div>
              <label for="password" class="formInputLabel">Şifre</label>
              <input
                type="password"
                name="password"
                id="password"
                v-model="signUpForm.password"
                placeholder="••••••••"
                class="formInput"
              />
            </div>

            <div>
              <label for="passwordConfirmation" class="formInputLabel"
                >Şifre Tekrar</label
              >
              <input
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
                v-model="signUpForm.passwordConfirmation"
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
