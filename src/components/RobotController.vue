<template>
  <div>
    <Board :roboId="roboId" :robots="robots" />
    <Joystick @command="sendCommand" />
  </div>
</template>

<script>
import Board from './ScreenBoard.vue';
import Joystick from './ScreenJoystick.vue';
import {v4 as uuidv4} from 'uuid';
import roboService from '../services/robotService'
import cable from '../cable';

export default {
  components: {
    Board,
    Joystick
  },
  data() {
    return {
      roboId: null,
      robots: {}
    };
  },
  created() {
    this.roboId = uuidv4();
    this.getRobots()
    this.subscription = cable.subscriptions.create(
      { channel: 'GameChannel', id: this.roboId },
      {
        connected: () => {
          console.log('Connected to GameChannel');
        },
        disconnected: () => {
          console.log('Disconnected from GameChannel');
        },
        received: (data) => {
          const response = JSON.parse(data.output)
          this.robots[response.id] = { ...response }
        },
        sendCommand: function (command) {
          this.perform('send_command', { command: command });
        }
      }
    );
  },
  methods: {
    sendCommand(command) {
      this.subscription.perform('receive', { message: command });
    },
    async getRobots() {
     const response = await roboService.getAllRobots()
     this.robots = response
     console.log(response)
    }
  }
}
</script>