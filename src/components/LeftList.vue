<template>
  <div class="leftList" v-watermark="{text:'水印名称',textColor:'rgba(180, 180, 180, 0.3)'}" >
    <el-row>
      <el-col>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          style="border:none"
        >
          <div v-for="(item1,index) in menuData" :key="''+index">
            <el-menu-item :index="item1.path" v-if="!item1.children">
              <i class="el-icon-setting"></i>
              <span slot="title">{{item1.name}}</span>
            </el-menu-item>
            <el-submenu v-if="item1.children" :index="item1.path" :key="index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item1.name}}</span>
              </template>
              <el-menu-item-group v-for="(item2,index) in item1.children" :key="index">
                <el-menu-item :index="item2.path">{{item1.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuData: [
        {
          name: "首页",
          path: "/index",
          order: "/index"
        },
        {
          name: "企业信息管理",
          order: "1",
          path: "componyinfomanage",
          children: [
            {
              path: "componyinfomanage",
              name: "企业信息"
            }
          ]
        },
        {
          path: "postinfomange",
          name: "岗位信息管理",
          order: "2",
          children: [
            {
              path: "postinfomange",
              name: "岗位信息"
            }
          ]
        },
        {
          path: "orderinfomange",
          name: "订单信息管理",
          order: "3",
          children: [
            {
              path: "orderinfomange",
              name: "订单信息"
            }
          ]
        },
        {
          path: "datamangeinfo",
          name: "数据字典",
          order: "4",
          children: [
            {
              path: "datamangeinfo",
              name: "岗位类型"
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.leftList {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #545c64;
}
</style>