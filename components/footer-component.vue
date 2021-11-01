<template>
  <div class="site-footer">
    <div class="list">
      <nuxt-link to="/" class="list_item">{{$t('starmobo')}}</nuxt-link>
      <nuxt-link to="/" class="list_item">{{$t('mobile')}}</nuxt-link>
      <nuxt-link to="/" class="list_item">{{$t('batry')}}</nuxt-link>
      <nuxt-link to="/" class="list_item">{{$t('lavazem')}}</nuxt-link>
      <nuxt-link to="/" class="list_item">{{$t('smart')}}</nuxt-link>
      <nuxt-link to="/" class="list_item">{{$t('learning')}}</nuxt-link>
    </div>

    <div class="access">
      <div class="access_item">
        <div class="access_item_titr">{{$t('access')}}</div>
        <div class="access_item_list menu">
          <div class="access_item_list_row">
            <nuxt-link to="/" class="access_item_list_row_link">{{$t('rules')}}</nuxt-link>
            <nuxt-link to="/" class="access_item_list_row_link">{{$t('return')}}</nuxt-link>
            <nuxt-link to="/" class="access_item_list_row_link">{{$t('asked')}}</nuxt-link>
          </div>
          <div class="access_item_list_row">
            <nuxt-link to="/" class="access_item_list_row_link">{{$t('work')}}</nuxt-link>
            <nuxt-link to="/" class="access_item_list_row_link">{{$t('about')}}</nuxt-link>
            <nuxt-link to="/" class="access_item_list_row_link">{{$t('contact')}}</nuxt-link>
          </div>
        </div>
      </div>

      <div class="access_item">
        <div class="access_item_titr">{{$t('branch')}}</div>
        <div class="access_item_list address">
          <div class="access_item_list_item">{{$t('address1')}}</div>
          <div class="access_item_list_item">{{$t('address2')}}</div>
        </div>
      </div>

      <div class="access_item">
        <div class="access_item_titr">{{$t('permissions')}}</div>
        <div class="access_item_list social">
          <div class="access_item_list_social">
            <img src="../assets/img/ecunion.png" alt="">
          </div>
          <div class="access_item_list_social">
            <img src="../assets/img/logo.png" alt="">
          </div>
          <div class="access_item_list_social">
            <img src="../assets/img/logo (1).png" alt="">
          </div>
          <div class="access_item_list_social">
            <img src="../assets/img/asnaf.png" alt="">
          </div>
        </div>
        <div class="access_item_list link">
          <div class="access_item_list_button instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path id="Forma_1" data-name="Forma 1" d="M5,16a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0h6a5,5,0,0,1,5,5v6a5,5,0,0,1-5,5ZM1.5,5v6A3.5,3.5,0,0,0,5,14.5h6A3.5,3.5,0,0,0,14.5,11V5A3.5,3.5,0,0,0,11,1.5H5A3.5,3.5,0,0,0,1.5,5ZM4,8a4,4,0,1,1,4,4A4,4,0,0,1,4,8ZM5.5,8A2.5,2.5,0,1,0,8,5.5,2.5,2.5,0,0,0,5.5,8Zm6.265-4.3a.533.533,0,1,1,.533.534A.533.533,0,0,1,11.764,3.7Z" fill="#fff"/>
            </svg>
            starmobo
          </div>
          <div class="access_item_list_button telegram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
              <path id="Shape_1" data-name="Shape 1" d="M257.029,4118.455l17.822-6.391a1.149,1.149,0,0,1,1.544,1.29l-3.074,13.578a1.412,1.412,0,0,1-2.188.8l-6.138-4.3a.732.732,0,0,1-.084-1.142l6.281-5.889a.341.341,0,0,0-.432-.524l-8.577,5.305a2,2,0,0,1-1.72.18l-3.431-1.22A.886.886,0,0,1,257.029,4118.455Z" transform="translate(-256.423 -4111.992)" fill="#fff"/>
            </svg>
            starmobo
          </div>
        </div>
      </div>
    </div>

    <div class="copyright">
      <div class="copyright_text">{{$t('copyright_text')}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      availableLocales () {
        // return this.$i18n.locales
      }
    }
  }
</script>

<style scoped src="../assets/styles/header/index.css"></style>