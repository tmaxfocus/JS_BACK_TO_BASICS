// a file containing named export and default export

export const stateName = "Oregon";
export const capitalCity = "Salem";
export const stateBird = "Western meadowlark";
export default function getStateInfo() {
  return { stateName, capitalCity, stateBird };
}
