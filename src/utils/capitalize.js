const capitalize = (s) =>
  typeof s === "string" ? `${s.charAt(0).toUpperCase()}${s.slice(1)}` : ""

export default capitalize
