export default function maskify(string) {
  if (!string || string.length <= 4) return "";
  return `${"#".repeat(string.length - 4)}${string.substr(string.length - 4)}`;
}
