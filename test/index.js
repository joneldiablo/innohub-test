const InnohubTest = require('../src/InnohubTest');

const main = () => {
  console.log('=========Innohub test========');
  let innohubTest = new InnohubTest();
  console.log('->', 'reverse');
  let input = 'hello world!!!';
  let output = innohubTest.reverse(input);
  console.log('input:', input);
  console.log('output:', output);
  console.log('done:', output === '!!!dlrow olleh');
  console.log();
  input = 'abcd';
  output = innohubTest.reverse(input);
  console.log('input:', input);
  console.log('output:', output);
  console.log('done:', output === 'dcba');
  console.log('-------------------');

  console.log('->', 'reverseSameObject');
  let inputObj = { input: 'hello world!!!' };
  innohubTest.reverseSameObject(inputObj);
  console.log('input:', inputObj.input);
  console.log('done:', inputObj.input === '!!!dlrow olleh');
  console.log();
  inputObj = { input: 'abcd' };
  innohubTest.reverseSameObject(inputObj);
  console.log('input:', inputObj.input);
  console.log('done:', inputObj.input !== 'abcd');
  console.log('-----------------');

  console.log('->', 'fold');
  let foldInput = {};
  innohubTest.fold(foldInput);
  console.log('input:', foldInput);
  console.log('done:', foldInput.result === 0);
  console.log();
  foldInput = { foo: { bar: 1 }, bar: { bar: 4, foo: { foo: 1 } } };
  innohubTest.fold(foldInput);
  console.log('input:', foldInput);
  console.log('done:', foldInput.result === 1);
  console.log();
  foldInput = { foo: [{ bar: 1 }], bar: { bar: 4, foo: { foo: 1 } } };
  try {
    innohubTest.fold(foldInput);
  } catch (error) {
    console.log(error.message);
    foldInput.result = 'Error';
  }
  console.log('input:', foldInput);
  console.log('done:', foldInput.result === 'Error');
  console.log('-----------------');
  console.log();
  foldInput = { foo: 'lol' };
  try {
    innohubTest.fold(foldInput);
  } catch (error) {
    console.log(error.message);
    foldInput.result = 'Error';
  }
  console.log('input:', foldInput);
  console.log('done:', foldInput.result === 'Error');
  console.log('-----------------');

  console.log('->', 'plusIndex');
  let inputPlus = 5;
  let outputPlus = innohubTest.plusIndex(inputPlus);
  console.log('input:', inputPlus);
  console.log('output:', outputPlus);
  console.log('done:', outputPlus === 15);
  console.log('-----------------');
}

main();
