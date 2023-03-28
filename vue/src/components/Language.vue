<template>
    <button @click="click"
        class="flex justify-center items-center w-[126px] h-12 bg-[#27272A] rounded-lg cursor-pointer">
        <div v-if="titulo === 'Português'">
            <img src="../assets/brazil.svg">
        </div>
        <div v-if="titulo === 'Inglês'">
            <img src="../assets/united-states.svg">
        </div>
        <div v-if="titulo === 'Espanhol'">
            <img src="../assets/spain.svg">
        </div>

        <span v-if="titulo === 'Português'" class="ml-2 font-semibold text-sm text-[#EDEDED]">
            Português
        </span>
        <span v-if="titulo === 'Inglês'" class="ml-2 font-semibold text-sm text-[#EDEDED]">
            Inglês
        </span>
        <span v-if="titulo === 'Espanhol'" class="ml-2 font-semibold text-sm text-[#EDEDED]">
            Espanhol
        </span>
    </button>
</template>


<script>
export default {
    props: {
        titulo: String,
        icone: String,
        click: Function
    }
}
</script>