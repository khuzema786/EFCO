const { readdirSync } = require("fs");
const reader = require("xlsx");

const getProducts = (dirname) => {
  const file = reader.readFile(dirname);

  let products = {};

  const sheets = file.SheetNames;

  for (let i = 0; i < sheets.length; i++) {
    if (file.SheetNames[i].startsWith("L")) continue;
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    const name = temp[0]["L2"];
    const series = temp[0]["L1"];
    const specificationType = temp[0]["TH"];

    let specifications = [], specificationOrder = [];
    for (let col = 1; temp[0][`TC${col}`] !== undefined; col++) {
      specificationOrder.push(`TC${col}`)
      temp.forEach((el, idx) => {
        let res = {};
        res[`TC${col}`] = el[`TC${col}`] || "";
        if (col === 1) specifications.push(res);
        else specifications[idx] = { ...specifications[idx], ...res };
      });
    }
    
    const list = temp.reduce(
      (acc, { List }) =>
        List ? (acc = [...acc, List]) : acc,
      []
    );

    const description = temp.reduce(
      (acc, { Description }) =>
        Description ? (acc = [...acc, Description]) : acc,
      []
    );

    let images = readdirSync(
      `src/assets/images/product/${file.SheetNames[i].replaceAll("-", "/")}`
    );
    images = images.map(
      (image) =>
        `assets/images/product/${file.SheetNames[i].replaceAll(
          "-",
          "/"
        )}/${image}`
    );

    const product = {
      name,
      description,
      specifications,
      list,
      specificationType,
      specificationOrder,
      images,
    };

    products[series] = products[series]
      ? [...products[series], product]
      : [product];
  }

  return products;
};

const getNews = (dirname) => {
  const file = reader.readFile(dirname, {
    type: 'binary',
    cellDates: true,
    cellNF: false,
    cellText: false
  });

  return reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);
};

const getCompanies = (dirname) => {
  const file = reader.readFile(dirname, {
    type: 'binary',
    cellDates: true,
    cellNF: false,
    cellText: false
  });

  return reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);
};

const getVideos = (dirname) => {
  const file = reader.readFile(dirname, {
    type: 'binary',
    cellDates: true,
    cellNF: false,
    cellText: false
  });

  let videos = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[0]]);
  
  let i = 0;
  while(i < videos.length) {
    if(videos[i]["Category"]) {
      const Category = videos[i]["Category"];
      while(++i < videos.length && !videos[i]["Category"]) {
        videos[i] = { ...videos[i], Category }
      }
    }
  }
console.log(videos)
  return videos;
};


module.exports = { getProducts, getNews, getCompanies, getVideos }