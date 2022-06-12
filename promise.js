const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (category) => {
  try {

    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();

    let good = 0;
    let bad = 0;

    theaterIXX.forEach((data) => {
      if (data.hasil === 'marah') bad += 1;
      if (data.hasil === 'tidak marah') good += 1;
    });

    theaterVGC.forEach((data) => {
      if (data.hasil === 'marah') bad += 1;
      if (data.hasil === 'tidak marah') good += 1;
    });

    if (category === 'marah') return bad;
    if (category === 'tidak marah') return good;

  } catch (error) {

    console.log(error);

  }
};

module.exports = {
  promiseOutput,
};
