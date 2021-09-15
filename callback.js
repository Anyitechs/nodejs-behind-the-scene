const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('File does not exist');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("Couldn't save file");
      resolve('Image saved');
    });
  });
};

// Async/Await Pattern
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);

    const res1 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const all = await Promise.all([res1, res2, res3]);
    const imgs = all.map((el) => el.body.message);
    await writeFilePro('dog-img.txt', imgs.join('\n'));
    console.log('Done');
  } catch (err) {
    console.log(err.message);
    throw err;
  }
  return '2: Ready';
};

(async () => {
  try {
    console.log('1 here');
    const x = await getDogPic();
    console.log(x);
    console.log('3 here');
  } catch (err) {
    console.log('Error from IIFE');
  }
})();

// Promise pattern
// readFilePro(`${__dirname}/dog.txt`).then(data => {
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
// }).then(res => {
//     console.log(res.body);
//     return writeFilePro('dog-img.txt', res.body.message);

//     // fs.writeFile('dog-img.txt', res.body.message, err => {
//     //     if (err) return;
//     //     console.log('Random dog image saved');
//     // });
// }).then(res => {
//     console.log(res);
// })
// .catch(err => {
//     console.log(err.message);
// })

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//     if (err) return;

//     console.log(`Breed: ${data}`);

//     superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then(res => {
//         console.log(res.body);

//         fs.writeFile('dog-img.txt', res.body.message, err => {
//             if (err) return;
//             console.log('Random dog image saved');
//         });
//     }).catch(err => {
//         if (err) return console.log(err.message);
//     })
// });
