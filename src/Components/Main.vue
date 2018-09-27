<template>
  <main class="container">
    <div class="box original-box">
      <label class="label original-box__title" for="original-text">Treść oryginalna</label>
      <textarea id="original-text" class="textarea" v-text="originalText" @change="parseText" placeholder="Wklej tekst tutaj"></textarea>
      <button class="btn btn--load">Wczytaj</button>
    </div><div class="box result-box">
      <label class="label result-box__title" for="result-text">Tłumaczenie wynikowe</label>
      <textarea id="result-text" class="textarea" v-text="translatedText" readonly></textarea>
      <button class="btn btn--copy">Kopiuj</button>
    </div>
    <div class="sentences">
      <single-translation v-for="(row, index) in translationsList" :key="index" :translation="row" @click.native="chooseSentence(index)"></single-translation>
    </div>

    <div class="form">
      <p class="textblock" v-text="activeSentence"></p>
      <p class="textblock" v-text="activetranslatedSentence"></p>
      <input class="form__textbox" type="text" v-model="translatedSentence" placeholder="Wpisz tłumaczenie powyższego zdania, a następnie kliknij ZAPISZ"/>
      <button class="form__button" @click="setTranslation">Zapisz</button>
      
      <p></p>

      <div class="switch-toggle switch-holo">
        <input id="s1_1" name="s1" type="radio">
        <label for="s1_1" onclick="">Piękne</label>

        <input id="s1_2" name="s1" type="radio" checked>
        <label for="s1_2" onclick="">*</label>

        <input id="s1_3" name="s1" type="radio">
        <label for="s1_3" onclick="">Wierne</label>

        <a></a>
      </div>

      <div class="switch-toggle switch-holo">
        <input id="s2_1" name="s2" type="radio">
        <label for="s2_1" onclick="">Niepewne</label>

        <input id="s2_2" name="s2" type="radio" checked>
        <label for="s2_2" onclick="">Chyba poprawne</label>

        <input id="s2_3" name="s2" type="radio">
        <label for="s2_3" onclick="">Poprawne!</label>

        <a></a>
      </div>
    </div>
  </main>
</template>

<script>
import Translation from "./SingleTranslation.vue";
import "css-toggle-switch/dist/toggle-switch.css";

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

.box {
  display: inline-block;
  width: 50%;
}

.label {
  display: block;
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-weight: 700;
}

.btn {
  display: block;
  font-size: 0.76em;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  cursor: pointer;
  outline: none;
  border: none;
  border-top: 3px #000 solid;
  border-bottom: 3px #000 solid;
  &--load {
    background-color: lighten(#000, 10%);
    color: #eee;
  }
  &--copy {
    background-color: lighten(#000, 20%);
    color: #ddd;
  }
  &:hover {
    color: #000;
    border-color: darken($secondary-color, 20%);
    background-color: $secondary-color;
  }
}

.original-box {
  &__title {
    background-color: $secondary-color;
  }
}

.result-box {
  &__title {
    background-color: darken($secondary-color, 15%);
  }
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
</style>
