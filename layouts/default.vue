<template>
  <v-app light>
    <v-app-bar
      fixed
      app
    >

      <v-toolbar-title v-text="title"/>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
          >
            {{ getCurrentLanguageInfo.name }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(lang, index) in languages"
            :key="index"
          >
            <v-list-item-title @click="setLanguage(lang.name)">{{ lang.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt/>
      </v-container>
    </v-main>


    <footer-component></footer-component>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Star Mobo Test',
        languages: [
          {name: "en", is_rtl: false, native: "English", is_default: false},
          {name: "fa", is_rtl: true, native: "فارسی", is_default: true},
        ],
        current_language: "fa"
      }
    },
    computed: {
      getCurrentLanguageInfo() {
        return this.languages.find((item) => {
          return item.name === this.current_language;
        })
      }
    },
    mounted() {
      this.$vuetify.rtl = this.getCurrentLanguageInfo.is_rtl;
      this.$i18n.locale = 'fa'
    },

    methods: {
      setLanguage(name) {
        this.current_language = name;
        this.$vuetify.rtl = this.getCurrentLanguageInfo.is_rtl;
        this.$i18n.locale = name
      }
    }
  }
</script>
