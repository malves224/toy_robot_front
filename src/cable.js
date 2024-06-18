// src/cable.js
import { createConsumer } from "@rails/actioncable";

const cable = createConsumer(`ws://${process.env.BACKEND_URL}/cable`);

export default cable;
