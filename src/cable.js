// src/cable.js
import { createConsumer } from "@rails/actioncable";

const cable = createConsumer(`ws://159.65.236.207:3000/cable`);

export default cable;
