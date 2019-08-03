<template>
  <el-container id="app">
    <el-row id="nav">
      <!-- Navigation Menu -->
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <el-header>
            <h1>{{title}}</h1>
            <router-link to="/">Sign Up</router-link>
            <router-link to="/dashboard">Dashboard</router-link>
          </el-header>
        </div>
      </el-col>

      <!-- Main Content -->
      <el-col :span="24">
        <el-main>
          <router-view/>
        </el-main>
      </el-col>

      <!-- Footer -->
      <el-col :span="24">
        <div class="grid-content bg-purple-light">
          <el-footer>{{footer}}</el-footer>
        </div>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      title: "State Manager",
      footer: "Copyright: Abdullah Zeidan 2019"
    };
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 1rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.bg-purple-light {
  background: #e5e9f2;
  height: 100px;
  width: 100vw;
}

main {
  height: calc(100vh - 200px);
}

.grid-content .el-header {
  display: flex;
  align-items: center;
  width: 75%;
  height: 100px !important;
  margin: auto;
}

h1 {
  text-align: left;
  flex-grow: 1;
}

.el-footer {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: right;
}
</style>
