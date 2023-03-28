<script setup>
import Language from "./components/Language.vue";
</script>

<template>
  <header class="w-screen flex justify-center bg-[#27272A] py-4 px-0">
    <div class="py-[6px] px-5 bg-[#DADADA54] rounded-lg">
      <img src="./assets/logo.svg" alt="StackX" />
    </div>
  </header>

  <section
    class="w-[791px] my-0 mx-auto mt-24 text-2xl text-center font-medium text-white font-sans"
  >
    <p v-if="lang == 'português'">
      Olá, meu nome é <strong>Anderson</strong> Lins e eu sou
      Desenvolvedor Front-end,
      <strong>Tecnologias que tenho experiência:</strong>
    </p>

    <p v-if="lang == 'inglês'">
      Hi, my name is <strong>Anderson</strong> Lins and I'm a
      Front-end Developer,
      <strong>Technologies I have experience with:</strong>
    </p>

    <p v-if="lang == 'espanhol'">
      Hola, mi nombre es <strong>Anderson</strong> Lins y soy
      desarrollador front-end,
      <strong>tecnologías con las que tengo experiencia:</strong>
    </p>
  </section>

  <div
    class="my-0 mx-auto mt-16 py-[22px] px-14 pr-0 bg-[#27272A] border-[1px] border-[#9D4B00] rounded-lg"
  >
    <ul class="gap-[100px] columns-3 list-disc">
      <li
        v-for="item in techs"
        class="font-sans font-medium text-lg text-[#EDEDED]"
      >
        {{ item }}
      </li>
    </ul>
  </div>

  <footer
    class="flex justify-center flex-wrap gap-[50px] w-screen mt-auto pb-7"
  >
    <Language
      titulo="Português"
      icone="Português"
      :click="() => updateLang('português')"
    />
    <Language
      titulo="Inglês"
      icone="Inglês"
      :click="() => updateLang('inglês')"
    />
    <Language
      titulo="Espanhol"
      icone="Espanhol"
      :click="() => updateLang('espanhol')"
    />
  </footer>
</template>

<script>
export default {
  data() {
    return {
      techs: [
        "JavaScript",
        "React",
        "Vue Js",
        "Tailwind CSS",
        "Styled Components",
        "Saas",
        "Node",
        "TypeScript",
        "Angular",
        "Java",
      ],
      lang: "português",
    };
  },
  methods: {
    updateLang(value) {
      this.lang = value;
    },
  },
  components: { Language },
};
</script>
