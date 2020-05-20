import * as packageJson from '../package.json';

function doStuff(pkgJson) {
  console.log(pkgJson.name)
}

console.log(packageJson.name);
doStuff(packageJson);
