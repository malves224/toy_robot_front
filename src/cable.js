// src/cable.js
import { createConsumer } from "@rails/actioncable";

const cable = createConsumer(`ws://${process.env.VUE_APP_BACKEND_URL}/cable`);

export default cable;
