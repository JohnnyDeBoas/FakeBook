<template>
  <div class="row justify-between">
    <div class="row items-center justify-center q-ml-sm q-pa-sm">
      <q-avatar class="q-mr-sm">
        <img :src="post.avatar" alt="" srcset="" />
      </q-avatar>
      <div>
        <strong>{{post.name}}</strong>
        <div class="row justify-center items-center">
          <span>{{timeAgo()}}</span>
          <q-icon
            name="fas fa-circle"
            size="5px"
            class="q-mx-sm"
          />
          <q-icon
            name="fas fa-globe-asia"
            size="18px"
          />
        </div>
      </div>
    </div>
    <div class="row justify-between items-start q-mr-md q-mt-sm q-pa-sm">
          <q-icon
            color="blue"
            name="fas fa-star"
            size="15px"
            class="q-ml-sm"

          />
          <q-icon
            name="fas fa-ellipsis-h"
            size="18px"
            class="q-ml-sm"

          />
    </div>

    <p class="q-mt-lg q-mx-sm" v-html="post.text">
    </p>

    <q-img :ratio="1" :src="post.url"></q-img>

    <div class="row items-center full-width justify-between q-my-sm">
      <div class="row items-center">
        <q-icon
        name="fas fa-thumbs-up"
        size="13px"
        color="white"
        class="q-ml-sm q-mr-xs thumbsup-icon"
        />
        <span>
          {{post.likes}}
        </span>
      </div>
      <div class="row-items-center q-mr-md">
        <span>{{post.comments}} comentarios</span>
        <q-icon class="q-mx-sm"
        name="fas fa-circle" size="5px"/>
        <span>{{post.shareds}} compartilhamentos</span>
      </div>
      <div class="line q-my-sm q-mx-md"></div>

      <div class="row items-center full-width justify-around">
        <div class="row items-center">
          <q-icon
          name="fas fa-thumbs-up"
          size="22px"
          class="q-px-sm"
          />

          <span>curtir</span>
        </div>
        <div class="row items-center">
          <q-icon
          name="fas fa-pen"
          size="18px"
          class="q-px-sm"
          />
          <span>Comentar</span>
        </div>
        <div class="row items-center">
          <q-icon
          name="fas fa-share"
          size="22px"
          class="q-px-sm"
          />
          <span>Compartilhar</span>
          
        </div>
      </div>
      <div class="line-strong q-my-md"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Post',
  props: ["post"],
  methods: {
    timeAgo() {
      let currentPost = this.post;
      const today = new Date();
        let diffTime = Math.abs(today - new Date(currentPost.time));
        var returnDate = ''

        if(diffTime <= 60000) {
            let sec = Math.round(diffTime / 1000);
            returnDate = `à ${sec} segundo${sec > 1 ? 's' : ''} atrás`;
        } else if(diffTime <= 3600000){
            let min = Math.round(diffTime / 60000);
            returnDate = `à ${min} minuto${min > 1 ? 's' : ''} atrás`;
        } else if(diffTime >= 3600000){
            let hour = Math.round(diffTime / 3600000);
            returnDate =  `à ${hour} hora${hour > 1 ? 's' : ''} atrás`;
          } else {
            returnDate = currentPost.time
          }
          return returnDate
    },
  },
})
</script>

<style lang="scss" scoped>

.q-icon {
  color: #656668;
}
  .thumbsup-icon{
    width: 25px;
    height: 25px;
    background-color: #1678f3;
    border-radius: 50%;
  }
</style>
