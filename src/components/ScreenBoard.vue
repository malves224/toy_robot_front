<template>
    <div class="board">
      <div v-for="col in 5" :key="col" class="col">
        <div v-for="row in [5, 4, 3, 2, 1]" :key="row" class="item">
          <div v-for="robo in robots" :key="robo.id">
            <div  v-if="robo.x == col && robo.y == row" class="robot" :class="`robot-${robo.f} ${roboId === robo.id && 'current-robo'}`">
              <img width="80" height="80" :src="roboImage" />
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
  
<script>
import roboImage from '../assets/icons8-robot-48.png'
export default {
  props: {
    robots: Object,
    roboId: String
  },
  data() {
    return {
      roboImage
    }
  },
}
</script>
  
<style scoped>
.board {
  display: flex;
  flex-flow: row;
  justify-content: center;
  background-image: url('../assets/table.webp');
  width: 400px;
  height: 400px;
}

.row {
  display: flex;
  flex-flow: column;
}

.item {
  height: 78px;
  width: 78px;
  display: flex;
  justify-content: center;
  border: 1px solid rgb(125, 118, 118);
  align-items: center;
}

.current-robo {
  border-radius: 50%;
  border: 2px solid red;
}

.robot-NORTH {
  transform: rotate(0deg);
}

.robot-EAST {
  transform: rotate(90deg);
}

.robot-SOUTH {
  transform: rotate(180deg);
}

.robot-WEST {
  transform: rotate(270deg);
}
</style>
  