export default class DataService {
  constructor() {
    axios.defaults.baseURL = "http://127.0.0.1:8000/";
  }

  getData(vegpont, megjelenit) {
    axios
      .get(vegpont)
      .then(function (response) {
        // handle success
        //console.log(response.data);
        megjelenit(response.data);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  postData(data, vegpont, megjelenit, frissitCallback) {
    axios
    .post(vegpont, data)
    .then(function (response) {
        //response data --> backenden írtuk
        megjelenit(response.data)
        frissitCallback();
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }

  putData(vegpont, id, data, hibaCallback) {
    axios
      .put(vegpont + "/" + id, data)
      .then(function (response) {
        // handle success
        console.log(response);
        //frissitCallback();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        hibaCallback(error);
      })
      .finally(function () {
        // always executed
      });
  }

  deleteData(vegpont, id, hibaCallback, frissitCallback) {
    axios
      .delete(vegpont + "/" + id)
      .then(function (response) {
        // handle success
        console.log(response);
        frissitCallback();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        hibaCallback(error);
      })
      .finally(function () {
        // always executed
      });
  }
}
