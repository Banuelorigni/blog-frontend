<template>
  <n-menu v-model:value="activeKey" mode="horizontal" @update-value="showTable" :options="menuOptions"/>
    <n-modal
        v-model:show="logoutShowModal"
        :mask-closable="false"
        preset="dialog"
        title="Logout"
        content="确认登出？"
        positive-text="确认"
        negative-text="算了"
        @positive-click="onPositiveClick"
        @negative-click="onNegativeClick"
    />

  <n-modal
      v-model:show="showModal"
      class="custom-card"
      preset="card"
      :style="bodyStyle"
      title="Login"
      size="huge"
      :bordered="false"
  >
    <n-tabs
        class="card-tabs"
        default-value="signin"
        size="large"
        animated
        pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
      <n-tab-pane name="signin" tab="登录">
        <n-form>
          <n-form-item-row label="用户名">
            <n-input v-model:value="username" ref="usernameInput"/>
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input
                type="password"
                show-password-on="click"
                placeholder="password"
                :maxlength="15"
                v-model:value="password"
                ref="passwordInput"
            ></n-input>
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong @click="() => handleLoginClick('login')">
          登录
        </n-button>
      </n-tab-pane>
      <n-tab-pane name="signup" tab="注册">
        <n-form>
          <n-form-item-row label="用户名">
            <n-input/>
          </n-form-item-row>
          <n-form-item-row label="密码">
            <n-input
                type="password"
                show-password-on="click"
                placeholder="password"
                :maxlength="15"
            ></n-input>
          </n-form-item-row>
          <n-form-item-row label="重复密码">
            <n-input
                type="password"
                show-password-on="click"
                placeholder="password"
                :maxlength="15"
            ></n-input>
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong>
          注册
        </n-button>
      </n-tab-pane>
    </n-tabs>
  </n-modal>
</template>

<script>
import {defineComponent, h, ref} from "vue";
import {NIcon,useMessage} from "naive-ui";
import {RouterLink} from "vue-router";
import {
  TimerOutline as TimeIcon,
  HeartOutline as Heart,
  HomeOutline as Home,
  PricetagsOutline as Tags,
  LogInOutline as LoginIcon, PersonCircleOutline
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
  {
    label: () =>
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
    label: () =>
        JSON.parse(localStorage.getItem("user"))?.name ?
            h(
                'span',
                [
                  h('span', JSON.parse(localStorage.getItem("user")).name)
                ]
            ) :
            h(
                'span',
                [
                  h('span', '登陆')
                ]
            ),
    key: JSON.parse(localStorage.getItem("user"))?.name ? "user" : "login",
    icon: JSON.parse(localStorage.getItem("user"))?.name ? renderIcon(PersonCircleOutline) : renderIcon(LoginIcon)
  }
];

export default defineComponent({
  setup() {
    const activeKey = ref(null);
    const showModal = ref(false);
    const logoutShowModal = ref(false);

    const message = useMessage();
    const showModalRef = ref(false);

    const username = ref('');
    const password = ref('');
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.expired && user.expired < Date.now()) {
      alert('登录已超时，请重新登录');
      localStorage.clear();
      window.location.reload();
    }

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
      username,
      password,
      message,
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
      showModal,
      logoutShowModal,
      onNegativeClick() {
        message.info("Cancel");
        showModalRef.value = false;
      },
      onPositiveClick() {
        fetch('http://localhost:8080/users/logout', {
          method: 'POST',
          credentials: 'include',
        })
            .then(response => {
              if (response.ok) {
                message.success('已成功登出！');
                localStorage.clear();
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              } else {
                message.error('登出失败！');
              }
            })
            .catch(error => {
              console.error(error);
              message.error('网络错误！');
            });
      }

    };
  },
  methods: {
    handleLoginClick(key) {
      if (key === 'login') {
        const message = this.message;
        const userData = {
          username: this.username,
          password: this.password
        };
        const request = {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'platform': 'portal',
          },
          body: JSON.stringify(userData)
        };
        fetch('http://localhost:8080/users/login', request)
            .then(response => {
              if (response.ok) {
                message.success("登陆成功！");
                response.json().then(data => {
                  localStorage.setItem('user', JSON.stringify({
                    name: data.username,
                    expired: Date.now() + 1800000
                  }));
                });
                setTimeout(() => {
                  window.location.reload();
                }, 1000);
              } else {
                message.error("登陆失败，请检查用户名和密码！");
              }
            })
            .catch(error => console.error(error));
        this.showModal = false;
      }
    },
    showTable(key) {
      if (key === 'login') {
        this.showModal = true;
      } else if (key === 'user') {
        this.logoutShowModal = true;
      }
    }
  }
});
</script>

<style>
.n-menu {
  margin-left: auto;
}

.custom-card .n-card-header {
  text-align: center;
  padding: 15px;
}

.custom-card .n-card-header__main {
  font-size: 30px;
}

</style>
