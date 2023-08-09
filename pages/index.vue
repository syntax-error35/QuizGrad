<template>
    <div class=" min-h-screen w-full ">
        <navbar />
        <div class=" container mx-auto grid md:grid-cols-2 pt-52 items-center ">
            <div class="grid lg:pl-20 pl-10">
                <div class="md:text-6xl text-4xl font-semibold tracking-wide md:leading-snug">
                    Learn <br> something new <br> with each question
                </div>
                <NuxtLink to="/quiz"
                    class="bg-primary text-white md:text-4xl text-3xl md:py-4 md:px-8 py-3 px-4 w-fit rounded-lg mt-10 flex justify-center transition-colors hover:bg-black duration-500">
                    Start
                </NuxtLink>
            </div>
            <div class="grid ">
                <SvgLanding class=" lg:w-[500px] lg:h-[489px] " />
            </div>
        </div>
    </div>
</template>