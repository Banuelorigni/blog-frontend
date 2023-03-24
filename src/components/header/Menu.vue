<template>
  <n-menu v-model:value="activeKey" mode="horizontal" @update-value="handleLoginClick" :options="menuOptions"/>
  <n-modal
      v-model:show="showModal"
      class="custom-card"
      preset="card"
      :style="bodyStyle"
      title="Login"
      size="huge"
      :bordered="false"
  >
    <n-space justify="center" :style="{ bottom: '5px'}" >
      <n-h5>username:</n-h5>
      <n-input v-model:value="value" type="text" placeholder="username" :style="{ width: '200px' }"  />
    </n-space>
    <n-space justify="center">
      <n-h5>password:</n-h5>
      <n-input
          type="password"
          show-password-on="click"
          placeholder="password"
          :maxlength="14"
          :style="{ width: '200px' }"
      />
    </n-space>
  </n-modal>
</template>

<script>
import {defineComponent, h, ref} from "vue";
import {NIcon} from "naive-ui";
import {RouterLink} from "vue-router";
import {
  TimerOutline as TimeIcon,
  HeartOutline as Heart,
  HomeOutline as Home,
  PricetagsOutline as Tags,
  LogInOutline as LoginIcon
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

const menuOptions = [
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: "home"
              },
              exact: true
            },
            {default: () => "主页"}
        ),
    key: "go-back-home",
    icon: renderIcon(Home)
  },
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: "tags"
              },
              exact: true
            },
            {default: () => "Tags"}
        ),
    key: "tags",
    icon: renderIcon(Tags)
  },
  {label: () =>
        h(
            RouterLink,
            {
              to: {
                name: "archives"
              },
              exact: true
            },
            {default: () => "时间轴"}
        ),
    key: "time-line",
    icon: renderIcon(TimeIcon)
  },
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: "about"
              },
              exact: true
            },
            {default: () => "about"}
        ),
    key: "about",
    icon: renderIcon(Heart)
  },
  {
    label: "登陆",
    key: "login",
    icon: renderIcon(LoginIcon),
  }
];

export default defineComponent({
  setup() {
    const activeKey = ref(null);
    const showModal = ref(false);

    function handleMenuClick(key) {
      if (activeKey.value === key) {
        activeKey.value = null
      } else {
        activeKey.value = key;
      }
    }

    return {
      value: ref(null),
      activeKey,
      menuOptions: menuOptions.map((option) => {
        return {
          ...option,
          onClick: () => {
            option.onClick && option.onClick();
            handleMenuClick(option.key);
          }
        };
      }),

      bodyStyle: {
        width: "600px"
      },
      showModal

    };
  },
  methods: {
    handleLoginClick(key) {
      if (key === 'login') {
        this.showModal = true;
      }
    }
  }
});
</script>

<style>
.n-menu {
  margin-left: auto;
}
.custom-card .n-card-header{
  text-align: center;
  padding: 15px;
}

.custom-card .n-card-header__main{
  font-size: 30px;
}
</style>
