export default function updateData(firstObj: object, secondObj: object) {
  const mergedObj = {};
  const keysfirstObj = Object.keys(firstObj);
  const keyssecondObj = Object.keys(secondObj);

  const commonKeys = Array.from(
    new Set([...keysfirstObj, ...keyssecondObj])
  ).filter((key) => keysfirstObj.some((item) => item === key));

  for (const key of commonKeys)
    mergedObj[key] = secondObj[key] || firstObj[key];

  return mergedObj;
}
