// Create nodes for each element in the data structure
CREATE (:Node {name: "A", description: "This is a description of A"})
CREATE (:Node {name: "B", description: "This is a description of B"})
CREATE (:Node {name: "B1", description: "This is a description of B1"})
CREATE (:Node {name: "B2", description: "This is a description of B2"})
CREATE (:Node {name: "B3", description: "This is a description of B3"})
CREATE (:Node {name: "C", description: "This is a description of C"})
CREATE (:Node {name: "D", description: "This is a description of D"});

// Create relationships between the nodes
MATCH (a:Node {name: "A"}), (b:Node {name: "B"})
CREATE (a)-[:HAS_CHILD]->(b)
WITH a, b
MATCH (b1:Node {name: "B1"}), (b:Node {name: "B"})
CREATE (b)-[:HAS_CHILD]->(b1)
WITH a, b
MATCH (b2:Node {name: "B2"}), (b:Node {name: "B"})
CREATE (b)-[:HAS_CHILD]->(b2)
WITH a, b
MATCH (b3:Node {name: "B3"}), (b:Node {name: "B"})
CREATE (b)-[:HAS_CHILD]->(b3)
WITH a
MATCH (c:Node {name: "C"})
CREATE (a)-[:HAS_CHILD]->(c)
WITH a
MATCH (d:Node {name: "D"})
CREATE (a)-[:HAS_CHILD]->(d);


