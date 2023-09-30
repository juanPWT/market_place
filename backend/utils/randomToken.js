export const generateToken = (length) => {
  const randomToken = process.env.MY_TOKEN;
  const tokken = [];
  for (let i = 0; i < length; i++) {
    const rand = (Math.random() * (randomToken.length - 1)).toFixed(0);
    tokken[i] = randomToken[rand];
  }

  return tokken.join("");
};
