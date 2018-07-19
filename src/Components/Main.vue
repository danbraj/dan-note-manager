<template>
    <div class="main">
      <div class="main__textarea_left">
        <label>
          Treść oryginalna (wklej tutaj)
          <textarea class="main__textarea" v-text="originalText" @change="parseText"></textarea>
        </label>
      </div>
      <div class="main__textarea_right">
        <label>
          Treść przetłumaczona (wynikowa)
        <textarea class="main__textarea" v-text="translatedText" readonly></textarea>
        </label>
      </div>
      <table class="main__list-of-sentences">
          <single-translation v-for="(tr, index) in translationsList" :key="index" :translation="tr" @click.native="chooseSentence(index)"></single-translation>
      </table>
      <div class="form">
        <p class="textblock" v-text="activeSentence"></p>
        <p class="textblock" v-text="activetranslatedSentence"></p>
        <input class="form__textbox" type="text" v-model="translatedSentence"/>
        <button class="form__button" @click="setTranslation">Zapisz</button>
      </div>
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
      return this.translationsList.length > 0
        ? this.translationsList[this.chosenSentence].original
        : "";
    },
    translatedText() {
      return this.translationsList.map(el => el.translated).join(". ");
    },
    activetranslatedSentence() {
      return this.translatedSentence;
    }
  },
  data() {
    return {
      chosenSentence: 0,
      originalText: "Original text. Test. Ala ma kota.",
      translationsList: [],
      translatedSentence: ""
    };
  },
  methods: {
    setTranslation(event) {
      this.translationsList[
        this.chosenSentence
      ].translated = this.translatedSentence;
    },
    chooseSentence(index) {
      this.chosenSentence = index;
      this.translatedSentence = "";
    },
    parseText() {
      const sentences = event.target.value.split(". ");
      this.translationsList = sentences.map(el => {
        return {
          original: el,
          translated: el
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 400px auto;
  grid-template-areas:
    "text-left text-right"
    "sentences sentences";
}
.main__textarea {
  width: 100%;
  height: 100%;
  display: block;
  outline: none;
  resize: none;
}
.main__textarea_left {
  grid-area: text-left;
  margin: 20px;
  padding: 14px;
}
.main__textarea_right {
  grid-area: text-right;
  margin: 20px;
  padding: 14px;
}
.main__list-of-sentences {
  grid-area: sentences;
}
.textblock {
  padding: 20px;
  margin: 0;
}
.form {
  background-color:bisque;
  width: 100%;
  bottom: 0;
  position: fixed;
}
.form__textbox {
  box-sizing: border-box;
  border: 1px solid #6a84ca;
  padding: 7px;
  margin: 0px auto;
  width: 400px;
  height: 34px;
}
.form__button {
  width: 200px;
  display: block;
  color: #000;
  border: 1px #6a84ca solid;
  background: #fff;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.78em;
  text-transform: uppercase;
  margin: 10px auto;
  padding: 12px 20px;
}
</style>
