import { connect } from "mongoose";

connect("mongodb://localhost:27017/demodatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
