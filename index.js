import { randomUUID } from "node:crypto";

const base36UUID = () => {
  const blocks = randomUUID().split("-");
  const radix = 36;
  const uid = blocks
    .map((block) => parseInt(block, 16).toString(radix))
    .join("");
  const letter = Math.round(Math.random() * 26 + 10).toString(radix);
  return letter + uid;
};

export default base36UUID;
