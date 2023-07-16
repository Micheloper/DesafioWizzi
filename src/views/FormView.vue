<template>
  <div class="container">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="form"
      :size="formSize"
      status-icon
      :label-position="labelPosition"
    >
      <el-form-item label="Nome" prop="name">
        <el-input v-model="ruleForm.name" placeholder="Nome" />
      </el-form-item>
      <el-form-item label="Email" prop="email">
        <el-input v-model="ruleForm.email" placeholder="Email" />
      </el-form-item>

      <div class="containerOrigenDestino">
        <el-form-item label="Origem" prop="origem" class="content">
          <el-input v-model="ruleForm.origem" placeholder="Origem" />
        </el-form-item>
        <el-form-item>
          <el-button @click="swapValues">
            <el-icon><Switch /></el-icon>
          </el-button>
        </el-form-item>
        <el-form-item label="Destino" prop="destination" class="content">
          <el-input v-model="ruleForm.destination" placeholder="Destino" />
        </el-form-item>
      </div>

      <div class="containerOrigenDestino">
        <el-form-item label="Adultos" prop="adulto">
          <el-input-number v-model="ruleForm.adulto" :min="0" :max="3" />
        </el-form-item>
        <el-form-item label="Menores" prop="menor">
          <el-input-number v-model="ruleForm.menor" :min="0" :max="3" />
        </el-form-item>
      </div>

      <el-form-item class="containerDate" label="Fecha" prop="dateRange">
        <el-date-picker
          type="daterange"
          v-model="ruleForm.dateRange"
          range-separator="a"
          start-placeholder="Fecha inicial"
          end-placeholder="Fecha final"
          format="DD-MM-YYYY"
          size="large"
          :disabled-date="disabledDate"
        ></el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">Comprar</el-button>
        <el-button @click="resetForm">Resetar</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { FormInstance, FormRules } from "element-plus";
import router from "../router";

interface RuleForm {
  name: string;
  email: string;
  origem: string;
  destination: string;
  dateRange: Date[];
  adulto: number;
  menor: number;
}

const labelPosition = ref("top");
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  name: "",
  email: "",
  origem: "",
  destination: "",
  dateRange: [],
  adulto: 0,
  menor: 0,
});

const disabledDate = (time) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return time.getTime() < today.getTime();
};

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: "Insira um nome" },
    { min: 3, max: 20, message: "O tamanho deve ser de 3 a 5" },
  ],
  email: [
    { required: true, message: "Insira um email" },
    { type: "email", message: "Insira um email válido" },
  ],
  origem: [
    { required: true, message: "Insira a Origem" },
    {
      min: 2,
      max: 3,
      message:
        "O codigo do Pais ou Estado tem que ser entre 2 ou 3 caracteres ",
    },
  ],
  destination: [
    { required: true, message: "Insira um Destino" },
    {
      min: 2,
      max: 3,
      message:
        "O codigo do Pais ou Estado tem que ser entre 2 ou 3 caracteres ",
    },
  ],
  adulto: [{ required: false }],
  menor: [{ required: false }],
});

const swapValues = () => {
  [ruleForm.origem, ruleForm.destination] = [
    ruleForm.destination,
    ruleForm.origem,
  ];
};

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${day}/${month}/${year}`;
};

const submitForm = async () => {
  const formEl = ruleFormRef.value;
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    const { name, email, origem, destination, adulto, menor, dateRange } =
      ruleForm;
    const formattedStartDate = formatDate(dateRange[0]);
    const formattedEndDate = formatDate(dateRange[1]);
    if (valid) {
      const query = {
        passenger: name,
        email: email,
        origin: origem,
        destination: destination,
        departureDate: formattedStartDate,
        returnDate: formattedEndDate,
        adults: adulto,
        children: menor,
      };
      router.push({ name: "boarding", query });
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = () => {
  const formEl = ruleFormRef.value;
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
}

.form {
  padding: 30px;
  background: rgba(31, 48, 112, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(17px);
  -webkit-backdrop-filter: blur(17px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.containerOrigenDestino {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

.content {
  width: 100%;
}

.el-form--default.el-form--label-top .el-form-item .el-form-item__label {
  color: rgb(255, 255, 255);
}
</style>
