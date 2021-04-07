export default require("mongodb").MongoClient.connect(process.env.CONNECTION, {
  maxPoolSize: 10,
  useUnifiedTopology: true,
});
