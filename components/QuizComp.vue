<template>
    <div class="w-full text-center flex flex-col justify-center items-center gap-8">
        <!-- load the question -->
        <div class=" text-question md:text-5xl text-2xl font-medium mb-10">{{ question }}</div>
        <!-- load options -->
        <div class=" w-3/4 grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-8">
            <div v-for="(option, i) in options" :key="i" class="group">
                <div @click="setAsSelected(i)"
                    class="grid text-2xl px-6 py-4 rounded-lg  justify-start group-hover:border-4 group-hover:border-question group-hover:transition duration-300"
                    :style="{ backgroundColor: answerSelected ? selectedOption === i ? (correctAns === i ? '#45C486' : '#A40021') : correctAns === i ? '#45C486' : defaultBg : defaultBg }">
                    <div class="flex justify-center items-center">
                        <div
                            class=" rounded-full bg-white w-[50px] h-[50px] flex justify-center items-center mr-6 font-semibold text-question">
                            {{ i + 1 }}</div> {{ option }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['question', 'options', 'correctAns'],

    onMounted() {
        this.answerSelected = false
        this.selectedOption = null
    },
    data: () => {
        return {
            defaultBg: "#fffdd0",
            selectedOption: null,
            answerSelected: false,
        }
    },
    methods: {
        setAsSelected(index) {
            this.answerSelected = true
            this.selectedOption = index;

            setTimeout(() => {
                this.$emit('changeQuestion', this.selectedOption === this.correctAns ? 10 : 0)
            }, 700)
        }
    }

}
</script>