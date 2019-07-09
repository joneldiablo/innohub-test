const fs = require('fs-extra');
const ObjectionModelGenerator = require('objection-model-generator');

const main = async () => {
  let omg = new ObjectionModelGenerator({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root'
  }, 'innohub-test');
  let models = await omg.createFiles();
  let file = 'src/api/model/innohub-test.js';
  await fs.writeFile(file, models, { recursive: true });
  console.log('\n -> file writed: ', file);
}

main();