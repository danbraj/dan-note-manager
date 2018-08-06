<template>
    <div class="container">
      <div class="side-block_top">
        <label>
          Treść oryginalna
          <textarea class="textarea" v-text="originalText" @change="parseText" placeholder="Wklej tekst tutaj"></textarea>
        </label>
      </div>
      <div class="side-block_bottom">
        <label>
          Tłumaczenie wynikowe (piękne lub/i wierne)
        <textarea class="textarea" v-text="translatedText" readonly></textarea>
        </label>
      </div>
      <div class="list-of-sentences">
          <single-translation v-for="(row, index) in translationsList" :key="index" :translation="row" @click.native="chooseSentence(index)"></single-translation>
      </div>
      <div class="form">
        <p class="textblock" v-text="activeSentence"></p>
        <p class="textblock" v-text="activetranslatedSentence"></p>
        <input class="form__textbox" type="text" v-model="translatedSentence" placeholder="Wpisz tłumaczenie powyższego zdania, a następnie kliknij ZAPISZ"/>
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
      return this.translationsList
        .map(el => el.translated)
        .join(" ")
        .trim();
    },
    activetranslatedSentence() {
      return this.translatedSentence;
    }
  },
  data() {
    return {
      chosenSentence: 0,
      originalText: "",
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
      this.translatedSentence = this.translationsList[
        this.chosenSentence
      ].translated;
    },
    parseText() {
      let counter = 0;
      const text = event.target.value;
      const sentences = text.match(/[^\.!\?]+[\.!\?]+/g); // + kropki po sobie, po kropce spacja
      this.translationsList = sentences.map(el => {
        return {
          original: el,
          translated: "",
          idx: ++counter
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/base/variables";
label {
  line-height: 30px;
}
.container {
  display: grid;
  grid-template-columns: 420px auto;
  grid-template-rows: 450px 450px minmax(200px, auto);
  grid-template-areas:
    "side-up main"
    "side-bottom main"
    ". main";
}
.textarea {
  box-sizing: border-box;
  margin: 0;
  padding: 8px;
  width: 100%;
  height: 400px;
  display: block;
  outline: none;
  resize: none;
}
.side-block_top {
  grid-area: side-up;
  padding: 10px;
}
.side-block_bottom {
  grid-area: side-bottom;
  padding: 10px;
}
.list-of-sentences {
  grid-area: main;
}
.form {
  background-color: $primary-color;
  width: 100%;
  bottom: 0;
  position: fixed;
  display: grid;
  grid-template-columns: auto 200px;
  grid-template-rows: 60px 60px 60px;
  grid-template-areas:
    "text-original btn"
    "text-translated btn"
    "input-block btn";
}
.textblock {
  font-size: 1.4em;
  line-height: 60px;
  padding-left: 12px;
  margin: 0;
}
.textblock:first-of-type {
  font-weight: bold;
}
.form__textbox {
  grid-area: input-block;
  box-sizing: border-box;
  border: 1px solid $primary-color;
  padding: 12px;
  margin: 8px 0 8px 8px;
}
.form__button {
  grid-area: btn;
  display: block;
  color: #000;
  border: 1px solid $primary-color;
  background: #fff;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.78em;
  text-transform: uppercase;
  margin: 8px;
  &:hover {
    background: $secondary-color;
  }
}
</style>
