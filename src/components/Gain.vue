<template>
  <div class="gain">
    <HeaderSpace></HeaderSpace>
    <!-- 图片 -->
    <div class="banner">
      <img src="../assets/develop.jpg" />
    </div>
    <!-- 立即联系 -->
    <div class="immediately">
      <h2>联系我们</h2>
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="menu"
      >
        <!-- 公司名称 联系人 联系邮箱 联系电话 所在地 所属行业 -->
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
    <!-- 底部 -->
    <FooterSpace></FooterSpace>
  </div>
</template>
<script>
import HeaderSpace from "@/components/common/Headerspace.vue";
import FooterSpace from "@/components/common/FooterSpace";
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
  components: { HeaderSpace, FooterSpace },
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
.banner img {
  width: 100%;
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
.immediately {
  /* 高度测试 */
  height: 700px;
  margin: 10px 20px;
}
.immediately h2 {
  font-size: 36px;
  font-weight: 700;
  margin: 40px 10px;
  text-align: center;
}
.immediately .el-button--primary {
  width: 100%;
  background: #6aa3ea;
  font-size: 16px;
  padding: 15px 0;
}
.immediately .el-select {
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
