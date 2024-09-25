<template>
    <section>
        <div ref="sliderRef" class="keen-slider">
            <div v-for="(logo, index) in logos" :key="index" class="keen-slider__slide">
                <img :src="logo" alt="Brand Logo" class="brand-logo" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useKeenSlider } from 'keen-slider/vue.es'
import "keen-slider/keen-slider.min.css"

const sliderRef = ref(null)
const logos = ref([
    '/Logo-test.png',
    '/Logo-test.png',
    '/Logo-test.png',
    '/Logo-test.png',
    '/Logo-test.png',
    // Add more logo paths as needed
])


</script>

<style scoped>
section {
    background-image: linear-gradient(90deg, rgb(48, 48, 48), var(--color-black-1));
    padding: 4rem;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
}

.brand-logo{
    width: 15rem;
}
</style>