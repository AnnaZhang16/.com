<template>
  <div class="menu">
    <div class="row">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <div class="list-group">
          <div
            v-for="(item, index) in itemArray1"
            :key="index"
            @contextmenu.prevent.stop="handleClick($event, item)"
            class="list-group-item list-group-item-action"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>

    <vue-simple-context-menu
      :elementId="'myFirstMenu'"
      :options="optionsArray1"
      :ref="'vueSimpleContextMenu1'"
      @option-clicked="optionClicked1"
    >
    </vue-simple-context-menu>
  </div>
</template>

<script>
import VueSimpleContextMenu from "vue-simple-context-menu";
export default {
  components: {
    VueSimpleContextMenu,
  },
  name: "Menu",
  data() {
    return {
      itemArray1: [
        {
          name: "Leslie",
          job: "Deputy Director",
        },
        {
          name: "Andy",
          job: "Shoeshiner",
        },
      ],
      optionsArray1: [
        {
          name: "Duplicate",
          slug: "duplicate",
        },
        {
          type: "divider",
        },
        {
          name: "Edit",
          slug: "edit",
        },
        {
          name: "Delete",
          slug: "delete",
        },
      ],
    };
  },
  props: {
    msg: String,
  },
  methods: {
    handleClick(event, item) {
      this.$ref.vueSimpleContextMenu.showMenu(event, item);
    },
    optionClicked1(event) {
      window.alert(JSON.stringify(event));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
