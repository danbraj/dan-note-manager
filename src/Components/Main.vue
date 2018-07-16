<template>
    <div class="container">
        <textarea v-text="originalText"></textarea>
        <textarea v-text="translatedText"></textarea>
            <table class="list-of-sentences">
                <single-translation v-for="(tr, index) in translationsList" :key="index" :translation="tr" @click.native="chooseSentence(index)"></single-translation>
            </table>
        <p v-text="activeSentence"></p>
        <input type="text" v-model="translatedSentence" @input="setTranslation"/>
    </div>
</template>

<script>
import Translation from "./SingleTranslation.vue";

export default {
  components: {
    "single-translation": Translation
  },
  computed: {
      activeSentence() {
        return this.translationsList[this.chosenSentence].original;
      }
  },
  data() {
    return {
      chosenSentence: 0,
      originalText: "Original text",
      translatedText: "Translated text",
      translationsList: [
        { original: "sentence 1", translated: "placeholder 1" },
        { original: "sentence 2", translated: "placeholder 2" },
        { original: "sentence 3", translated: "placeholder 3" }
      ],
      translatedSentence: ""
    };
  },
  methods: {
    setTranslation(event) {
      this.translationsList[this.chosenSentence].translated = event.target.value;
    },
    chooseSentence(index) {
      this.chosenSentence = index;
      this.translatedSentence = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: orangered;
}
</style>
