<template>
    <div class=" min-h-screen">
        <Navbar />
        <div class="w-full container mx-auto mt-48 ">
            <div>
                <QuizComp :question="quizInfo[index].question" :options="quizInfo[index].answers" :key="index"
                    :correctAns="quizInfo[index].correct" @changeQuestion="changeIndex" />
            </div>
            <div class="w-full flex justify-center mt-28 relative ">
                <SvgCounter />
                <div class=" absolute flex justify-center items-center bottom-11 text-2xl font-semibold">{{ timer }}</div>
            </div>
        </div>
    </div>
</template>
<script>
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
            quizInfo: [
                {
                    "question": "What is the capital of the United Kingdom?",
                    "answers": [
                        "Manchester",
                        "Birmingham",
                        "London",
                        "Bristol"
                    ],
                    "correct": 2
                },
                {
                    "question": "What is the capital of France?",
                    "answers": [
                        "Bordeaux",
                        "Brest",
                        "Paris",
                        "Lyon"
                    ],
                    "correct": 2
                },
                {
                    "question": "What is the capital of Spain?",
                    "answers": [
                        "Barcelona",
                        "Sevilla",
                        "Madrid",
                        "Valencia"
                    ],
                    "correct": 2
                },
                {
                    "question": "What is the capital of Germany?",
                    "answers": [
                        "Berlin",
                        "Munich",
                        "Frankfurt",
                        "Hamburg"
                    ],
                    "correct": 0
                },
                {
                    "question": "What is the capital of Poland?",
                    "answers": [
                        "Warsaw",
                        "Krakow",
                        "Gdansk",
                        "Wroclaw"
                    ],
                    "correct": 0
                }
            ]
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
                    if (this.index < this.quizInfo.length - 1) {
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