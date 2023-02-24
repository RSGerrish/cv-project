const getHealth = async (req, res) => {
  const allGood = { response: "All Good" }

  res.status(200).json(allGood)
}

module.exports = { getHealth }