<template>
    <div class=" min-h-screen ">
        <navbar />
        <div class="">
            <div class=" container mx-auto grid grid-cols-2 pt-52 items-center">
                <div class="grid pl-20">
                    <div class="text-6xl font-semibold tracking-wide leading-snug">
                        Learn <br> something new <br> with each question
                    </div>
                    <NuxtLink to="/quiz" class="bg-primary text-white text-4xl p-4 w-1/5 rounded-lg mt-10 flex justify-center">
                        <!-- <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 21V3L19 12L5 21Z" stroke="#ffffff" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg> -->
                        Start
                    </NuxtLink>
                </div>
                <div class="grid ">
                    <SvgLanding />
                </div>
            </div>
        </div>
</div></template>