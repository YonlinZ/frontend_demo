<template>
  <div class="dashboard">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>总用户数</span>
              <router-link to="/user/list">Go to Path</router-link>
            </div>
          </template>
          <div class="card-content">
            1,234
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>今日访问</span>
            </div>
          </template>
          <div class="card-content">
            256
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.card-content {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style> 