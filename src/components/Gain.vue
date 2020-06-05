<template>
  <div class="gain">
    <HeaderSpace></HeaderSpace>
    <!-- 图片 -->
    <div class="banner">
      <img src="../assets/connect.png" />
    </div>
    <!-- 立即联系 -->
    <div class="immediately">
      <h2>立即联系</h2>
      <!-- 表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="menu"
      >
        <!-- 公司名称 联系人 联系邮箱 联系电话 所在地 所属行业 -->
        <el-form-item label="公司名称" prop="name">
          <el-input v-model="ruleForm.name" size="medium"></el-input>
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
        <el-form-item label="所在地" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="所属行业" prop="industry">
          <el-input v-model="ruleForm.industry"></el-input>
        </el-form-item>
        <el-button type="primary" class="submit">提交</el-button>
      </el-form>
    </div>
    <!-- 底部 -->
    <FooterSpace></FooterSpace>
  </div>
</template>
<script>
import HeaderSpace from "@/components/HeaderSpace";
import FooterSpace from '@/components/FooterSpace';
export default {
  name: "gain",
  components: { HeaderSpace,FooterSpace},
  data() {
    return {
      ruleForm: {
        name: "",
        contacts: "",
        email: "",
        phone: "",
        address: "",
        industry: ""
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
            type: "number",
            message: "请输入正确的电话格式",
            trigger: ["blur", "change"]
          }
        ],
        address: [{ required: true, message: "请输入所在地", trigger: "blur" }],
        industry: [
          { required: true, message: "请选择所属行业", trigger: "blur" }
        ]
      }
    };
  }
};
</script>
<style>
.banner img {
  width: 100%;
}
.menu {
  width: 30%;
  margin: 0 auto;
  text-align: center;
}
.menu .submit {
  text-align: c;
}
.immediately {
  margin: 10px 20px;
}
.immediately h2 {
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 10px;
  margin-bottom: 10px;
  text-align:center;
  color:#4383EB;
}
</style>
