import axiosClients from './axiosClient';

const artistApi = {
  getArtistDetail(params) {
    const url = `/artist/detail/${params.artistId}`;
    return axiosClients.get(url);
  },
  getArtistByCountry(params) {
    const url = `/artist/get-singers/${params.area}`;
    return axiosClients.get(url);
  },
  getSearchSingers(params) {
    const url = `/artist/search-singer`;
    return axiosClients.get(url, { params });
  },
  getSingerList(params) {
    const url = `/artist/singer-list`;
    return axiosClients.get(url, { params });
  },
  addNewSinger(formData, form, setProgress) {
    const url = `/artist/add`;
    return axiosClients.post(url, formData, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
      },
      onUploadProgress: function (progressEvent) {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);

        setProgress(percentCompleted);
      },
    });
  },
  updateSinger(formData, form, setProgress) {
    const url = `/artist/update`;
    return axiosClients.post(url, formData, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
      },
      onUploadProgress: function (progressEvent) {
        var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);

        setProgress(percentCompleted);
      },
    });
  },
};
export default artistApi;
