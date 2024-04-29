const { fetchDataFromNeo4j } = require("../models/neo4Model");

const getAllNodes = async (req, res) => {
  try {
    const data = await fetchDataFromNeo4j();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getAllNodes };
