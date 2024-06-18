<template>
  <div class="joystick">
    <button class="futuristic-button" v-if="!started" @click="start">GO</button>
    <div class="joystick-actions" v-if="started">
      <button class='futuristic-button' @click="moveLeft">
        <img width="48px" height="48px" :src="rotateIconLeft"/>
      </button>
      <button class='futuristic-button' @click="move">run</button>
      <button class='futuristic-button' @click="moveRight">
        <img width="48px" height="48px" :src="rotateIconRight"/>
      </button>
    </div>
  </div>
</template>
  
<script>
import rotateIconLeft from '../assets/rotate-icon-left.png'
import rotateIconRight from '../assets/rotate-icon-right.png'

export default {
  data() {
    return {
      started: false,
      rotateIconLeft,
      rotateIconRight
    }
  },
  methods: {
    moveLeft() {
      this.$emit('command', 'LEFT');
    },
    moveRight() {
      this.$emit('command', 'RIGHT');
    },
    start() {
      this.started = true
      let x = Math.floor(Math.random() * 5) + 1;
      let y = Math.floor(Math.random() * 5) + 1;
      this.$emit('command', `PLACE ${x} ${y} 1 NORTH`);
    },
    move() {
      this.$emit('command', 'MOVE')
    }
  }
}
</script>
  
<style scoped>
.joystick {
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 15px;
}
.futuristic-button {
  background: linear-gradient(145deg, #444, #222);
  border: 2px solid #00dbde;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3), inset 0 5px 10px rgba(0, 0, 0, 0.3);
  color: #00dbde;
  cursor: pointer;
  font-size: 24px;
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transition: all 0.2s ease;
}

.futuristic-button:active {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.6), inset 0 3px 6px rgba(0, 0, 0, 0.6);
  transform: translateY(2px);
}

.joystick-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>
  