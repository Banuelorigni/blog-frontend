<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions"/>
</template>

<script>
import {defineComponent, h, ref} from "vue";
import {NIcon} from "naive-ui";
import {RouterLink} from "vue-router";
import {BookOutline as BookIcon, HeartOutline as Heart, HomeOutline as Home, Pricetag as Tags} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

const menuOptions = [
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: "home"
          }
        },
        {default: () => "主页"}
    ),
    key: "go-back-home",
    icon: renderIcon(Home)
  },
  {
    label: "Tags",
    key: "pinball-1973",
    icon: renderIcon(Tags),
    disabled: true,
    children: [
      {
        label: "鼠",
        key: "rat"
      }
    ]
  },
  {
    label: "时间轴",
    key: "a-wild-sheep-chase",
    icon: renderIcon(BookIcon),
    disabled: true
  },
  {
    label: () => h(
        RouterLink,
        {
          to: {
            name: "about"
          }
        },
        {default: () => "about"}
    ),
    key: "go-back-home",
    icon: renderIcon(Heart)
  },
  {
    label: "登陆",
    key: "login",
    icon: renderIcon(BookIcon),
  }
];

export default defineComponent({
  setup() {
    return {
      activeKey: ref(null),
      menuOptions
    };
  }
});
</script>

<style>
.n-menu {
  margin-left: auto;
}
</style>
