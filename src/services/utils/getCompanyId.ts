import Cookies from "js-cookie";

interface ICompanyInfo {
  pk_uuid: string;
}

export const getCompanyId = () => {
  let companyInfoArray: ICompanyInfo[] | undefined;

  const companyInfoJSON = Cookies.get("orgInfo");
  if (companyInfoJSON) {
    companyInfoArray = JSON.parse(companyInfoJSON);
  }

  return companyInfoArray;
};
