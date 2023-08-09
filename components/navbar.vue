<template>
    <div class="fixed top-0 z-50 w-full bg-white">
        <!-- <div class=" "> -->
        <nav class="shadow-md text-[#6B7A82]">
            <div class="container mx-auto">
                <div class="flex items-center justify-between h-20">
                    <!-- main-logo -->
                    <div class="flex items-center ml-2">
                        <div class="flex-shrink">
                            <NuxtLink to="/" >
                                <MainLogo class="md:mt-4 md:ml-3 xl:ml-0 md:w-[235px] md:h-[64px] w-[145px] h-fit ml-0" />
                            </NuxtLink>
                        </div>
                    </div>
                    <NuxtLink to="/how-it-works" class=" text-primary mr-4 text-xl font-medium">
                        How It Works?
                    </NuxtLink>
                </div>
            </div>
        </nav>
    </div>
</template>
  
<script setup>

import MainLogo from "./svg/MainLogo.vue";

</script>