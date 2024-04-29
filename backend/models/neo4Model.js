//  interacting with the Neo4j database.
const neo4j = require("neo4j-driver");
require("dotenv").config();

const { url, db_username, db_password, database } = process.env;

const driver = neo4j.driver(url, neo4j.auth.basic(db_username, db_password));
const session = driver.session({ database });

const fetchDataFromNeo4j = async () => {
  try {
    const result = await session.run(`
      MATCH path = (n:Node {name:'A'})-[:HAS_CHILD*]-(:Node)
      WITH collect(path) as paths
      CALL apoc.convert.toTree(paths) yield value
      RETURN value;   
    `);

    const modifiedData = result.records.map((record) => {
      const value = record.get("value");
      if (value) {
        return formatData(value);
      }
    });
    return modifiedData;
  } catch (error) {
    throw new Error("Failed to fetch node data");
  }
};

const formatData = (node) => {
  const formattedNode = {
    name: node.name,
    description: node.description,
  };

  if (node.has_child && node.has_child.length > 0) {
    formattedNode.children = node.has_child.map((child) => formatData(child));
  }

  return formattedNode;
};

module.exports = { fetchDataFromNeo4j };
