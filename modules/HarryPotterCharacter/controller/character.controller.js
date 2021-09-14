const fs = require("fs/promises");
const path = require("path");

const fetchAll = async (req, res, next) => {
  try {
    let rawdata = await fs.readFile(
      path.join(process.cwd() + "/json/harry-potter.json"),
      "utf-8"
    );
    let character = await JSON.parse(rawdata);

    res.status(200).json(character);
  } catch (error) {
    console.log(error);
    next({ message: "Error While Fetching All Character.", status: 400 });
  }
};

const fetchById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let rawdata = await fs.readFile(
      path.join(process.cwd() + "/json/harry-potter.json"),
      "utf-8"
    );
    let parseData = await JSON.parse(rawdata);

    let singleCharacter = parseData.filter((item) => item.id == id);

    res.status(200).json(singleCharacter[0]);
  } catch (error) {
    console.log(error);
    next({ message: "Character Not Found.", status: 401 });
  }
};

module.exports = { fetchAll, fetchById };
