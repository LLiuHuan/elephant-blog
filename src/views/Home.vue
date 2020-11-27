<template>
  <div class="home">
    <div class="main-header">
      <div class="vertical">
        <div class="main-header-content inner">
          <h1 class="page-title">ElephantBlog</h1>
          <h2 class="page-description">若想死后永垂不朽，首先得活得精彩。</h2>
          <h3 class="page-author">The key to immortality is first living a life worth remembering.</h3>
        </div>
      </div>
    </div>
    <div class="body">

    </div>
    <div class="">

    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},
  data() {
    return {
      value: ''
    }
  }
});
</script>

<style lang="scss">
.main-header {
  display: table;
  background: url("https://files.dbnuo.com/wallpaper/wallhaven-4ylgl0.webp") center center / cover no-repeat rgb(34, 34, 34);
  overflow: hidden;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
}

.vertical {
  display: table-cell;
  vertical-align: middle;
  width: 100%;
}

.inner{
  position: relative;
  width: 80%;
  max-height: 800px;
  padding: 10px;
}

#home, .inner{
  margin: 0 auto;
}

.page-title{
  font-size: 5rem;
  font-family: 'Playball',cursive;
  letter-spacing: -1px;
  font-weight: 700;
  color: #fff;
  -webkit-animation: fade-in-down 1s;
  animation: fade-in-down 1s both;
  -webkit-animation-delay: .6s;
  animation-delay: .5s;
  text-shadow: 0 3px 6px rgba(0,0,0,.3);
}
</style>
