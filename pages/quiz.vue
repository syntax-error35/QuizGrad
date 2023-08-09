<template>
    <div class=" min-h-screen">
        <Navbar />
        <div class="w-full container mx-auto mt-40 ">
            <div v-if="index < quizInfo.length">
                <div class="w-full flex justify-center md:mb-20 mb-16 relative ">
                    <SvgCounter />
                    <div class=" absolute flex justify-center items-center bottom-11 text-2xl font-semibold">{{ timer }}
                    </div>
                </div>
                <div>
                    <QuizComp :question="quizInfo[index].question" :options="quizInfo[index].answers" :key="index"
                        :correctAns="quizInfo[index].correct" @changeQuestion="changeIndex" />
                </div>
            </div>
            <div v-else class="w-full flex flex-col justify-center items-center -mt-10 ">
                <SvgScoreIcon class=" md:w-[277px] md:h-[285px] w-[200px] h-[200px]" />
                <div class="bg-[#fffdd0] rounded-xl p-6 mt-10 w-fit h-fit">
                    <div class="flex items-center justify-between pb-6 border-b-2 border-[#EDE8E3]">
                        <div class="flex items-center">
                            <div class="rounded-full bg-white p-2 w-12 h-12  md:block hidden  ">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 2L14.3607 9.26543H22L15.8197 13.7557L18.1803 21.0211L12 16.5309L5.81966 21.0211L8.18034 13.7557L2 9.26543H9.63932L12 2Z"
                                        stroke="#FCC822" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                            </div>
                            <p class=" ml-4 font-medium text-question md:text-3xl text-2xl">Total Score</p>
                        </div>
                        <p class=" ml-32 font-extrabold text-question md:text-3xl text-2xl">{{ totalScore }}</p>
                    </div>

                    <div class="flex items-center justify-between pt-6 ">
                        <div class="flex items-center">
                            <div class="rounded-full bg-white p-2 w-12 h-12 md:block hidden ">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10" stroke="#FCC822" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></circle>
                                    <path d="M12 6V12L16 16" stroke="#FCC822" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <p class=" ml-4 font-medium text-question md:text-3xl text-2xl">Total Time Taken</p>
                        </div>
                        <p class=" md:ml-32 font-extrabold text-question md:text-3xl text-2xl">{{ totaltime }}s</p>
                    </div>
                </div>
                <NuxtLink to="/"
                    class="bg-primary text-white md:text-4xl text-2xl py-4 px-8  rounded-lg mt-12 flex justify-center transition-colors hover:bg-black duration-500">
                    Finish
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<script>
import jsonData from "~/assets/questions.json";

export default {

    mounted() {
        this.startTimer()
    },
    data: () => {
        return {
            totaltime: 0,
            totalScore: 0,
            interval: null,
            timer: 15,
            index: 0,
            quizInfo: jsonData,
        }
    },
    methods: {
        changeIndex(payload) {
            this.index++
            this.totalScore += payload
            this.totaltime += 15 - this.timer
            this.timer = 15;
        },
        startTimer() {
            this.interval = setInterval(() => {
                if (this.timer === 0) {
                    clearInterval(this.interval)
                    if (this.index < this.quizInfo.length) {
                        this.changeIndex(0)
                        this.startTimer()
                    }
                    // this.index++
                } else {
                    this.timer--
                }
            }, 1000)
        }
    }
}
</script>