import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default ({ app }) => {
  app.i18n = new VueI18n({
    silentTranslationWarn: false,
    silentFallbackWarn: false,
    locale: "fa",
    messages: {
      en: require("../static/lang/content-en.json"),
      fa: require("../static/lang/content-fa.json"),
    }
  })
}
