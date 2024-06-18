<template>
  <div class="container" id="app">
    <RobotController />
  </div>
</template>

<script>
import RobotController from './components/RobotController.vue';

export default {
  components: {
    RobotController
  }
}
</script>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #80808091;
  width: 100vw;
  height: 100vh;
}

body {
  padding: 0;
  margin: 0;
}
</style>