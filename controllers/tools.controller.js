const tools = [
  {
    id: 1,
    name: "laptop",
    price: "250000",
  },
  {
    id: 2,
    name: "mobile",
    price: "50000",
  },
  {
    id: 3,
    name: "watch",
    price: "5000",
  },
  {
    id: 4,
    name: "earbuds",
    price: "2000",
  },
];

module.exports.getAllTools = (req, res, next) => {
  const { limit, page } = req.query;
  res.json(tools.slice(0, limit));
};
module.exports.saveATool = (req, res) => {
  tools.push(req.body);
  res.send(tools);
};

module.exports.getToolDetails = (req, res, next) => {
  const { id } = req.params;
  const tool = tools.find((tool) => tool.id == id);
  res.send(tool);
};
