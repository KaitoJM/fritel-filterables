<template>
  <li class="fritel-filterables-grid--item">
    <div @click="handleRecipeItemClick(props.pageId)">
      <div class="fritel-filterables-grid--image-container">
        <img :src="props.image" />
      </div>
      <div class="fritel-filterables-grid--details">
        <p class="fritel-filterables-grid--author">{{ props.author }}</p>
        <div class="fritel-filterables-grid--item-titlebar">
          <h3 class="fritel-filterables-grid--title">
            {{ props.name }}
          </h3>
        </div>
        <div class="fritel-filterables-grid--tags">
          <Badge v-for="tag in props.tags" :key="tag">{{ tag }}</Badge>
        </div>
      </div>
    </div>
  </li>

  <Dialog ref="dialogRef" :loading="previewLoading">
    <iframe
      class="fritel-filterables-grid--preview-iframe"
      :srcdoc="previewHtml"
      sandbox="allow-scripts allow-same-origin"
    />
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Badge from "../ui/Badge.vue";
import Dialog from "../ui/Dialog.vue";
import UTDService from "../../services/UTDService";

const props = defineProps<{
  name: string;
  author: string;
  image: string;
  pageId: string;
  tags: [];
}>();

const dialogRef = ref<InstanceType<typeof Dialog> | null>(null);
const previewHtml = ref("");
const previewLoading = ref(false);

const handleRecipeItemClick = async (pageId: string) => {
  previewHtml.value = "";
  previewLoading.value = true;
  dialogRef.value?.open();

  try {
    const pageHTML = await UTDService.openRecipePreview(pageId);
    previewHtml.value = `
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,400i,600,600i' id='selected-fonts' rel='stylesheet' type='text/css'/>
        <link href='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css' rel='stylesheet' type='text/css'/>
        <link href='https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/cdn/dist/v2/app.min.css' rel='stylesheet' type='text/css'/>
        <style id='style-theme-override'>body{font-weight:400;}h1{font-family:'Montserrat',serif;font-weight:null;font-size:36px;color:#000000;}h2{font-family:'Montserrat',serif;font-weight:null;font-size:30px;color:#000;}h3{font-family:'Montserrat',serif;font-weight:null;font-size:24px;color:#000000;}h4{font-family:'Montserrat',serif;font-weight:null;font-size:18px;color:#000000;}h5{font-family:'Montserrat',serif;font-weight:null;font-size:16px;color:#000000;}h6{font-family:'Montserrat',serif;font-weight:null;font-size:14px;color:#000000;}#primary-menu{background-color:#0a3209;}#sub-footer{background-color:#0a3209;}:root{--body-font-family:'Montserrat',serif;--body-font-color:#666666;--body-font-size:16px;--body-link:#e31c18;--body-link-hover:#354046;--body-line-height:1.6em;--menu-font-size:16px;--menu-icon-color:inherit;--menu-font-family:Montserrat;--menu-color:#000000;--menu-hover-link:inherit;--menu-hover-card:inherit;--menu-text-transform:normal;--footer-font-family:'Montserrat',serif;--footer-color:#FFFFFF;--footer-icon:#0a3209;--footer-font-size:16px;--footer-link:#0a3209;--footer-link-hover:#354046;--footer-line-height:1.5em;--page-title-color:#000000 --page-title-font-size:16px;--page-title-font-family:Montserrat;--page-title-line-height:1.5;--page-title-link:#0a3209;--page-title-hover:v#354046;--sub-footer-font-family:'Montserrat',serif;--sub-footer-color:#000000;--sub-footer-icon:inherit;--sub-footer-font-size:16px;--sub-footer-link:inherit;--sub-footer-link-hover:inherit;--sub-footer-line-height:1.5em;--topbar-font-size:53px;--topbar-icon-color:#0a3209;--topbar-font-family:Montserrat;--topbar-color:#000000;--container-max-width:1200px;--theme:#e31c18;--block-padding:6rem;--theme-hover:#354046;</style>
        <style>
        :root {
            --theme: #e31c18;
            --block-padding: 6rem;
            --theme-hover: #354046;
        }
        body {
            margin: 0;
        }
        </style> ${pageHTML}
        <script>
        var utdElementSiteUrl = '${UTDService.siteId}';
        var BLOGGER_URL = '/';
        <\/script>
        <script src='https://unpkg.com/swiper@6.1.2/swiper-bundle.min.js'><\/script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'><\/script>
        <script src='https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/cdn/dist/v2/app.min.multi-platform.js'><\/script>
    `;
  } catch (error) {
    dialogRef.value?.close();
  } finally {
    previewLoading.value = false;
  }
};
</script>

<style scoped lang="scss">
.fritel-filterables-grid {
  &--item {
    @apply rounded-lg overflow-clip border relative cursor-pointer;
  }

  &--image-container {
    @apply h-60 overflow-clip md:h-80;

    img {
      @apply object-cover h-80 hover:scale-110 w-full transition-transform duration-700;
    }
  }

  &--author {
    @apply absolute top-4 left-4 bg-primary py-2 px-6 text-[1.2rem] font-bold text-white rounded;
  }

  &--title {
    @apply text-[1.5rem] font-[500] text-center;
  }

  &--details {
    @apply p-8 flex flex-col gap-2;
  }

  &--tags {
    @apply flex flex-wrap gap-1 justify-center mt-4;
  }

  &--preview-iframe {
    @apply w-full h-full border-0 rounded-xl;
  }
}
</style>
