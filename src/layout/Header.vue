<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

// Store
import store from "@/store";

// Utils
import { destroyToken } from "@/utils/cookie_helper";

const searchTerm = ref("");
const router = useRouter();

function logout() {
  store.setIsLoggedIn(false);

  destroyToken("access-token");

  router.push("/");
}
</script>
<template>
  <div class="sticky top-0 z-[21] drop-shadow-xl">
    <ul class="navbar bg-base-200">
      <li class="navbar-start flex lg:hidden">
        <div class="dropdown">
          <label tabindex="0" class="btn-ghost btn-circle btn">
            <input type="checkbox" class="hidden" />
            <i class="pi pi-align-left"></i>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-200 p-2 shadow"
          >
            <li>
              <a @click="router.push('/')">Homepage</a>
            </li>
            <li><a @click="router.push('/features')">Features</a></li>
            <li>
              <a @click="router.push('/explore')">Explore</a>
            </li>
          </ul>
        </div>
        <div class="hidden sm:block lg:hidden">
          <a
            @click="router.push('/')"
            class="btn-ghost btn animate-text bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-xl normal-case text-transparent"
            >MassitFab</a
          >
        </div>
      </li>
      <li class="navbar-center hidden lg:navbar-start lg:block">
        <a
          @click="router.push('/')"
          class="btn-ghost btn animate-text bg-gradient-to-br from-base-content via-secondary to-accent-content bg-clip-text text-xl normal-case text-transparent hover:scale-110 hover:animate-pulse"
        >
          MassitFab
        </a>
        <a
          @click="router.push('/features')"
          class="btn-ghost btn animate-text bg-gradient-to-r from-base-content via-info to-success-content bg-clip-text text-lg normal-case text-transparent"
        >
          <span class="link-underline link-underline-black"> Features </span>
        </a>
        <a
          @click="router.push('/explore')"
          class="btn-ghost btn animate-text bg-gradient-to-r from-base-content via-info to-success-content bg-clip-text text-lg normal-case text-transparent"
        >
          <span class="link-underline link-underline-black"> Explore </span>
        </a>
      </li>
      <li class="navbar-end space-x-2">
        <div class="form-control">
          <div class="input-group">
            <input
              v-model="searchTerm"
              @keyup.enter="
                router
                  .push({
                    name: 'explore',
                    query: { searchTerm: searchTerm },
                  })
                  .then(() => {
                    router.go(0);
                  })
              "
              type="text"
              placeholder="Search…"
              class="input-bordered input"
            />
            <button
              class="btn-square btn"
              @click="
                router
                  .push({
                    name: 'explore',
                    query: { searchTerm: searchTerm },
                  })
                  .then(() => {
                    router.go(0);
                  })
              "
            >
              <i class="pi pi-search"></i>
            </button>
          </div>
        </div>
        <div
          v-if="store.isLoggedIn"
          class="dropdown dropdown-end hidden sm:dropdown-content sm:inline-block"
        >
          <label tabindex="0" class="btn-ghost btn-circle btn">
            <div class="indicator">
              <i class="pi pi-shopping-cart" style="font-size: 1.25rem"></i>
              <span class="badge-info badge badge-sm indicator-item">{{
                store.cartlist.TotalInCart
              }}</span>
            </div>
          </label>
          <div
            tabindex="0"
            class="card dropdown-content card-compact mt-3 w-52 bg-base-200 shadow"
          >
            <div class="card-body">
              <span class="text-lg font-bold"
                >{{ store.cartlist.TotalInCart }} Items</span
              >
              <span class="text-info"
                >Subtotal: ${{ store.cartlist.cartSubtotal }}</span
              >
              <div class="card-actions">
                <button
                  @click="router.push('/checkout')"
                  class="btn-secondary btn-block btn"
                >
                  <i class="pi pi-check-square pr-2" />
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="store.isLoggedIn"
          class="dropdown dropdown-end hidden sm:dropdown-content sm:inline-block"
        >
          <label tabindex="0" class="btn-ghost btn-circle btn">
            <i class="pi pi-cloud-upload" style="font-size: 1.25rem"></i>
          </label>
          <div
            tabindex="0"
            class="card dropdown-content card-compact mt-3 w-52 bg-base-200 shadow"
          >
            <div class="card-body">
              <span class="text-lg font-bold">List New Products?</span>
              <div class="card-actions">
                <button
                  @click="router.push('/upload')"
                  class="btn-primary btn-block btn"
                >
                  <i class="pi pi-upload pr-2" />
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="store.isLoggedIn"
          class="dropdown dropdown-end hidden sm:dropdown-content sm:inline-block"
        >
          <label tabindex="0" class="btn-ghost btn-circle btn">
            <div class="indicator">
              <span class="absolute -right-1 -top-1 flex h-3 w-3">
                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"
                ></span>
                <span
                  class="relative inline-flex h-3 w-3 rounded-full bg-sky-500"
                ></span>
              </span>
              <i class="pi pi-bell" style="font-size: 1.25rem"></i>
            </div>
          </label>
          <div
            tabindex="0"
            class="card dropdown-content card-compact mt-3 w-52 bg-base-200 shadow"
          >
            <div class="card-body">
              <span class="text-lg font-bold"
                >An empty notif says more than a full one!</span
              >
              <div class="card-actions"></div>
            </div>
          </div>
        </div>
        <div v-if="store.isLoggedIn" class="dropdown dropdown-end">
          <label
            tabindex="0"
            class="mask btn-ghost mask-hexagon btn-circle btn"
          >
            <div
              class="max-h-auto mask mask-hexagon relative max-w-max overflow-hidden rounded-full bg-primary p-5 before:absolute before:-inset-y-4 before:inset-x-0 before:animate-[spin_3s_linear_infinite] before:bg-gradient-to-r before:from-transparent before:to-secondary before:transition-[0.5s] before:content-[''] after:absolute after:inset-3 after:z-10 after:content-[''] hover:before:-inset-y-5 hover:before:inset-x-0"
            >
              <div
                class="mask mask-hexagon absolute inset-1 z-10 flex items-center justify-center overflow-hidden"
              >
                <img :src="`/hideout/${store.userData.profilePic}`" />
              </div>
            </div>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-200 p-2 shadow"
          >
            <li>
              <a
                class="justify-between"
                @click="router.push(`/profile/${store.userData.username}`)"
              >
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a @click="router.push('/settings')">Settings</a></li>
            <li><a @click="logout">Logout</a></li>
          </ul>
        </div>
        <a v-else class="btn" @click="router.push('/join')">JOIN</a>
      </li>
    </ul>
    <div class="h-[.9px] bg-base-300" />
  </div>
</template>
<style scoped>
.link-underline {
  border-bottom-width: 0;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
  background-size: 0 2px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(hsl(var(--bc)), hsl(var(--bc)));
}

.link-underline:hover {
  background-size: 100% 2px;
  background-position: 0 100%;
}
</style>
