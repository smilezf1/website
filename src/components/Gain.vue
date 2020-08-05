<template>
  <div class="gain">
    <HeaderSpace></HeaderSpace>
    <!-- 图片 -->
    <div class="gainBanner">
      <img src="../assets/img12.jpg" />
      <div class="gainBannerContent">
        <h3>联系我们</h3>
      </div>
    </div>
    <div class="gainBody">
      <!--  <h2 class="gainBodyTitle">联系我们</h2> -->
      <div class="gainBodyContent">
        <div class="gainBodyContentTitle">
          建立APP数据全生命周期安全体系,为企业核心资产保驾护航<br />
          所填信息保密,我们会及时和您联系
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
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入公司名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系人" prop="contacts">
            <el-input
              v-model="ruleForm.contacts"
              placeholder="请输入联系人"
            ></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱" prop="email">
            <el-input
              v-model="ruleForm.email"
              placeholder="请输入邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input
              v-model="ruleForm.phone"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="verifyCode">
            <el-row>
              <el-col :span="17">
                <el-input
                  v-model="ruleForm.verifyCode"
                  placeholder="图形验证码"
                ></el-input>
              </el-col>
              <el-col :span="6">
                <!-- 验证码 -->
                <img
                  v-if="Guid"
                  :src="
                    this.api.baseUrl +
                      '/common/verifyCode/generateImage?key=' +
                      Guid
                  "
                  style="margin-left:16px;"
                  @click="getVerifyCode()"
                  ref="captcha"
                  class="captcha"
                />
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="所在地" prop="selectedOptions">
            <el-cascader
              ref="cascader"
              size="large"
              :options="options"
              v-model="ruleForm.selectedOptions"
              @change="handleChange"
              style="width:100%"
              placeholder="请选择地址"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="所属行业" prop="industry">
            <el-input
              v-model="ruleForm.industry"
              placeholder="请输入所属行业"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="submit"
              @click="submitForm('ruleForm')"
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
import http from "../http";
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
  inject: ["reload"],
  data() {
    return {
      ruleForm: {
        name: "",
        contacts: "",
        email: "",
        phone: "",
        industry: "",
        selectedOptions: "",
        verifyCode: ""
      },
      rules: {
        name: [{ required: true, message: "请输入公司名称", trigger: "blur" }],
        contacts: [
          { required: true, message: "请输入联系人", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            pattern: /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/,
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
        verifyCode: [
          { required: true, message: "请输入验证码", tirgger: "blur" }
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
      labelPosition: "left",
      address: "",
      Guid: null
    };
  },
  methods: {
    submitForm(formName) {
      const _this = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          /*   _this.$refs[formName].resetFields();
          _this.selectedOptions = ""; */
          let corporateName = _this.ruleForm.name,
            contacts = _this.ruleForm.contacts,
            contactEmail = _this.ruleForm.email,
            contactPhone = _this.ruleForm.phone,
            industry = _this.ruleForm.industry,
            verifyCode = _this.ruleForm.verifyCode,
            location = _this.address,
            baseUrl = _this.api.baseUrl;
          http
            .fetchPost(baseUrl + "/api/mail/info/sendMailPersonalInfo", {
              corporateName,
              contacts,
              contactEmail,
              contactPhone,
              industry,
              location: location.join("/"),
              _t: _this.Guid,
              _validCode: verifyCode
            })
            .then(res => {
              if (res.data.status == "200") {
                _this.$message({
                  message: "感谢您的填写,我们会及时与您取得联系",
                  type: "success"
                });
                window.scrollTo(0, 0);
                _this.reload();
              }
              if (res.data.status == "500") {
                _this.$message.error("验证码错误");
                _this.ruleForm.verifyCode = "";
                _this.getKey();
              }
            });
        } else {
          _this.getKey();
          return false;
        }
      });
    },
    handleChange() {
      this.address = this.$refs["cascader"].getCheckedNodes()[0].pathLabels;
    },
    getVerifyCode() {
      this.getKey();
    },
    getKey() {
      let baseUrl = this.api.baseUrl,
        _this = this;
      http.fetchGet(baseUrl + "/common/verifyCode/generateKey").then(res => {
        if (res.status == "200") {
          _this.Guid = res.data;
        }
      });
    }
  },
  created() {
    this.getKey();
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
  margin: 20px auto;
  background: #f7f6f4;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.gainBodyContentTitle {
  position: relative;
  margin: 30px 0;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #666;
  line-height: 40px;
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
.gainBodyContent .menu {
  width: 80%;
  margin: 0px auto;
  text-align: center;
}
.gainBodyContent .menu .submit {
  margin-top: 20px;
}
.gainBodyContent .menu .captcha {
  cursor: pointer;
}
.menu .el-form-item {
  width: 60%;
  margin: 20px auto;
}
.menu .submit {
  text-align: c;
}
.gainBody {
  margin: 10px 20px 40px 20px;
}
.gainBodyTitle {
  font-size: 36px;
  text-align: center;
  color: #3b3b3b;
  margin-top: 15px;
  font-weight: 500;
}
.gainBody .el-button--primary {
  width: 100%;
  background: #6aa3ea;
  font-size: 16px;
  padding: 10px 0;
  border: none;
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
