const app = "I don't do much."

function destructivelyAppendKitten(name)
{
  kittens.push(name);
}

function destructivelyPrependKitten(name)
{
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name)
{
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name)
{
  kittens.shift(name);
}

function appendKitten(name)
{
  const moreKittens = [...kittens, name];
  return moreKittens;
}

function prependKitten(name)
{
  const moreKittens = [name, ...kittens];
  return moreKittens;
}

function removeLastKitten(name)
{
  kittens.slice(0, kittens.length - 1);
  return kittens;
}

function removeFirstKitten(name)
{
  kittens.slice(1);
}