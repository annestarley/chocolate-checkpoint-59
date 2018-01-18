const uuid = require('uuid')

const chocolates = [
  {
    id: "5a4788d7-5490-4737-8ece-8e1862e24957",
    name: "fudge",
    yumminess: "10/10"
  },
  {
    id: "08e0eda1-5254-4145-aa30-9e57d3c0c52f",
    name: "truffles",
    yumminess: "10/10"
  },
  {
    id: "43446794-8d09-4758-a9a8-0b7bc411dac8",
    name: "hot chocolate",
    yumminess: "2000000/10"
  },
  {
    id: "3eb511dc-2146-4cd2-855b-d8c098371dee",
    name: "milk choclate with caramel",
    yumminess: "10/10"
  },
  {
    "id": "12f5b7f1-d789-4d8f-87eb-ae05d3518fa5",
    "name": "reeses",
    "yumminess": "10/10"
  }
]

function getAllChocolates() {
  return chocolates
}

function getChocolateById(id) {
  let chocolate = chocolates.find(chocolate => chocolate.id === id)
  if (chocolate) return chocolate
}

function createChocolate(name, yumminess) {
  const chocolate = { id: uuid(), name, yumminess}
  chocolates.push(chocolate)
  return chocolate
}

function updateChocolate(id, name, yumminess) {
  const chocolate = getChocolateById(id)
  chocolate.name = name
  chocolate.yumminess = yumminess
  return chocolate
}

function deleteChocolate(id) {
  const chocolate = getChocolateById(id)
  const index = chocolates.indexOf(chocolate)
  chocolates.splice(index, 1)
  return chocolates
}

module.exports = {
  getAllChocolates,
  getChocolateById,
  createChocolate,
  updateChocolate,
  deleteChocolate
}
