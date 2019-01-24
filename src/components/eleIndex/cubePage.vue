<template>
       <cube-page type="scroll-view" title="Scroll" class="toutiao">
        <template>
        <div class="nav-scroll-list-wrap">
            <cube-scroll ref="navScroll" direction="horizontal">
            <ul class="nav-wrapper">
                <li v-for="(con, index) in cons" :key="index" class="nav-item">{{ cons }}</li>
            </ul>
            </cube-scroll>
            <div class="more-wrapper">
            <span class="more"></span>
            </div>
        </div>
        <div class="content-scroll-wrapper">
            <div class="content-scroll-list-wrap" ref="scrollWrapper">
            <cube-scroll
                ref="contentScroll"
                :options="options"
                @pulling-up="onPullingUp">
                <ul class="imgs-wrapper">
                <li v-for="(con, index) in cons" :key="index" class="imgs-item">
                    <img :src="'http://elm.cangdu.org/img/'+con.image_path" @load="onImgLoad">
                </li>
                </ul>
                <template slot="pulldown" slot-scope="props">
                <div v-if="props.pullDownRefresh"
                    class="cube-pulldown-wrapper"
                    :style="props.pullDownStyle">
                    <div v-if="props.beforePullDown"
                    class="before-trigger"
                    :style="{paddingTop: props.bubbleY + 'px'}">
                    <span :class="{rotate: props.bubbleY > 0}">↓</span>
                    </div>
                    <div class="after-trigger" v-else>
                    <div v-show="props.isPullingDown" class="loading">
                        <cube-loading></cube-loading>
                    </div>
                    <transition name="success">
                        <div v-show="!props.isPullingDown" class="text-wrapper"><span class="refresh-text">今日头条推荐引擎有x条更新</span></div>
                    </transition>
                    </div>
                </div>
                </template>
            </cube-scroll>
            </div>
        </div>
        </template>
  </cube-page>
</template>

<script>
let cnt = 1
export default {
    data(){
        return {
            options: {
            pullUpLoad: true
            },
            secondStop: 26
        }
    },
    props:{
        cons:Array
    },
    methods: {
    onPullingUp() {
      setTimeout(() => {
        // this.content = this.content.concat(imgs)
      }, 1000)
    },
    onImgLoad() {
      const contentScroll = this.$refs.contentScroll
      contentScroll.scroll.beforePullDown && contentScroll.refresh()
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>
