<template>
<li class="collection-item">
    <div class="card gradient-45deg-light-blue-cyan gradient-shadow">
        <div class="card-content white-text">
            <span class="card-title">{{book.title}}</span>
            <p>{{book.author}}</p>
            <hr>
            <ul>
                <li :key="key" v-for="(cat,key) in book.genres">{{cat}}</li>
            </ul>
        </div>
        <div class="card-action">
            <a href="#!" class="waves-effect waves-light btn gradient-45deg-red-pink" @click="$store.commit('DeleteBook',elem)"><i class="material-icons">close</i></a>
            <a href="#!" class="waves-effect waves-light btn gradient-45deg-red-pink"><i class="material-icons">edit</i></a>
        </div>
    </div>
</li>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["elem"],
  data() {
    return {};
  },
  mounted() {},
  computed: {
    book() {
      return this.elem;
    }
  },
  methods: {}
};
</script>

<style>

</style>
