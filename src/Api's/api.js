import { axios } from 'react-native-axios';

export const fetchBusiness = async ({searchQuery}) => {
    let url;
    if(searchQuery !== null){
      url = `https://admin.haavoo.com/api/business?city=kozhikode&area=&search_query=${searchQuery}&page=1&type=&category=&sort=`;
    }else{
           url = `https://admin.haavoo.com/api/business?city=kozhikode&area=&search_query=&page=1&type=&category=&sort=`;

    }
    alert(url)
    await axios
      .get(url)
      .then(function (response) {
        // alert(JSON.stringify(response.data));
        setData(response?.data?.data?.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };