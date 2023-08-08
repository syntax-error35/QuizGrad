<template>
    <div class="fixed top-0 z-50 w-full bg-white">
        <!-- <div class=" "> -->
        <nav class="shadow-md text-[#6B7A82]">
            <div class="container mx-auto">
                <div class="flex items-center justify-between h-20">
                    <!-- main-logo -->
                    <div class="flex items-center">
                        <div class="flex-shrink">
                            <NuxtLink to="/">
                                <!-- <SvgMainLogoSVG
                    class="my-4 md:ml-3 xl:ml-0 md:w-[235px] md:h-[64px] w-[145px] h-fit ml-0"
                  /> -->
                                <MainLogo class="mt-4 md:ml-3 xl:ml-0 md:w-[235px] md:h-[64px] w-[145px] h-fit ml-0" />
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- ====== laptop menu links ======   -->
                    <!-- <div class=" xl:block "> -->


                    <!-- ====== login button ====== -->

                </div>
            </div>

            <!-- ====== mobile menu links ======  -->
        </nav>
        <!-- </div> -->
    </div>
</template>
  
<script setup>

import MainLogo from "./svg/MainLogo.vue";

</script>
  
<style scoped>
.change_color {
    background-color: white;
}

/* ========= hamburger styles  */
.active-link-style {
    color: black;
}

.hamburger-menu {
    width: 24px;
    height: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
}

.hamburger-line {
    width: 100%;
    height: 2px;
    background-color: white;
    transition: transform 0.3s ease;
}

.active .hamburger-line:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.active .hamburger-line:nth-child(2) {
    opacity: 0;
}

.active .hamburger-line:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}
</style>
  