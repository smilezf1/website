<template>
  <div class="gain">
    <HeaderSpace></HeaderSpace>
    <!-- 图片 -->
    <div class="gainBanner">
      <img src="../assets/x6.jpg" />
      <div class="gainBannerContent">
        <h3>蛮犀科技构建智慧安全生活</h3>
        <article>移动应用人工渗透测试、移动应用漏洞专项分析</article>
      </div>
    </div>
    <div class="gainBody">
      <h2 class="gainBodyTitle">联系我们</h2>
      <!-- 表单 -->
      <div class="gainBodyContent">
        <div class="gainBodyContentTitle">
          <div><img src="../assets/bg.png" /></div>
          <h5>【联系我们】</h5>
        </div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="menu"
        >
          <el-form-item
            label="公司名称"
            prop="name"
            :label-position="labelPosition"
          >
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="contacts">
            <el-input v-model="ruleForm.contacts"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="所在地" prop="selectedOptions">
            <el-cascader
              size="large"
              :options="options"
              v-model="ruleForm.selectedOptions"
              @change="handleChange"
              style="width:100%"
              placeholder="请选择地址"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="所属行业" prop="industry">
            <el-input v-model="ruleForm.industry"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 底部 -->
    <FooterSpace></FooterSpace>
    <slideBar></slideBar>
  </div>
</template>
<script>
import HeaderSpace from "@/components/common/Headerspace.vue";
import FooterSpace from "@/components/common/FooterSpace";
import slideBar from "@/components/common/slideBar.vue";
import {
  provinceAndCityData,
  regionData,
  provinceAndCityDataPlus,
  regionDataPlus,
  CodeToText,
  TextToCode
} from "element-china-area-data";

export default {
  name: "gain",
  components: { HeaderSpace, FooterSpace, slideBar },
  data() {
    return {
      ruleForm: {
        name: "",
        contacts: "",
        email: "",
        phone: "",
        industry: "",
        selectedOptions: ""
      },
      rules: {
        name: [{ required: true, message: "请输入公司名称", trigger: "blur" }],
        contacts: [
          { required: true, message: "请输入联系人", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        phone: [
          { required: true, message: "请输入电话", trigger: "blur" },
          {
            pattern: /^1[34578]\d{9}$/,
            message: "请输入正确的电话格式",
            trigger: ["blur", "change"]
          }
        ],
        selectedOptions: [
          { required: true, message: "请输入所在地", trigger: "blur" }
        ],
        industry: [
          { required: true, message: "请选择所属行业", trigger: "blur" }
        ]
      },
      options: regionData,
      selectedOptions: [],
      value: "",
      labelPosition: "left"
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({ message: "提交成功!", type: "success" });
          this.$refs[formName].resetFields();
          this.selectedOptions = "";
        } else {
          return false;
        }
      });
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
<style>
.gainBanner {
  position: relative;
}
.gainBanner img {
  width: 100%;
  height: 700px;
}
.gainBannerContent {
  width: 1200px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
.gainBodyContent {
  width: 1200px;
  margin: 0 auto;
}
.gainBodyContentTitle {
  position: relative;
  margin-top: 20px;
}
.gainBodyContentTitle h5 {
  font-size: 20px;
  color: #333;
  font-weight: normal;
}
.gainBodyContentTitle > div {
  position: absolute;
  bottom: -2px;
  width: 50%;
}
.gainBodyContentTitle > div img {
  width: 100%;
}
.gainBannerContent h3 {
  font-size: 56px;
}
.gainBannerContent article {
  font-size: 18px;
  margin-top: 10px;
  letter-spacing: 1px;
  line-height: 35px;
}
.menu {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.menu .el-form-item {
  width: 60%;
  margin: 20px auto;
}
.menu .submit {
  text-align: c;
}
.gainBody {
  /* 高度测试 */
  height: 700px;
  margin: 10px 20px;
}
.gainBodyTitle {
  font-size: 36px;
  font-weight: 700;
  margin: 40px 10px;
  text-align: center;
  color: #333;
}
.gainBody .el-button--primary {
  width: 100%;
  background: #00b7fa;
  font-size: 16px;
  padding: 10px 0;
}
.gainBody .el-select {
  width: 100%;
}
.el-form-item__label {
  font-size: 16px;
  color: #2b2b2b;
}
.el-form-item__content {
  margin-left: 140px !important;
}
.el-form-item__label {
  text-align: left;
}
</style>
