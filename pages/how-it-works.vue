<template>
    <div class=" min-h-screen">
        <Navbar />
        <div class=" md:w-1/2 w-3/4 container mx-auto mt-40 flex flex-col justify-center items-center text-xl">
            <p class=" text-primary text-5xl font-semibold leading-snug tracking-wide mb-10">Instruction</p>
            <div class="flex mb-4">
                <div class="mr-4">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="#FCC822" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 2L14.3607 9.26543H22L15.8197 13.7557L18.1803 21.0211L12 16.5309L5.81966 21.0211L8.18034 13.7557L2 9.26543H9.63932L12 2Z"
                            stroke="#FCC822" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </div>
                <div class=" tracking-wide">In order to start the quiz, the user will have to press the Start button.
                    Questions will appear one after the other. They will have to answer the first question in order to see the
                    next one. </div>
            </div>
            <div class="flex mb-4">
                <div class="mr-4">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="#FCC822" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 2L14.3607 9.26543H22L15.8197 13.7557L18.1803 21.0211L12 16.5309L5.81966 21.0211L8.18034 13.7557L2 9.26543H9.63932L12 2Z"
                            stroke="#FCC822" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </div>
                <div class=" tracking-wide">For each question, the user will get 15 seconds. If they fail to answer within
                    15 seconds, they will be taken to the next question</div>
            </div>

            <div class="flex ">
                <div class="mr-4">
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="#FCC822" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 2L14.3607 9.26543H22L15.8197 13.7557L18.1803 21.0211L12 16.5309L5.81966 21.0211L8.18034 13.7557L2 9.26543H9.63932L12 2Z"
                            stroke="#FCC822" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </div>
                <div class=" tracking-wide">After completing the 5 questions, they will be shown their result. The result
                    will be interpreted in
                    score (points). For each correct answer, the user will get 10 points</div>
            </div>
        </div>
</div></template>