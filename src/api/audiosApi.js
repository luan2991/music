import axiosClients from './axiosClient';
const audiosApi = {
  getNewSongsHome(params) {
    const url = `/audios/new-song/${params.limit}`;
    return axiosClients.get(url);
  },
  getSong(params) {
    const url = `/audios/song/${params.songId}`;
    return axiosClients.get(url);
  },
  getNewSongs(params) {
    const url = `/audios/new-song`;
    return axiosClients.get(url, { params });
  },
  addNewSong(formData, form, setProgress) {
    const url = `/audios/add`;
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
  updateSong(formData, form, setProgress) {
    const url = `/audios/update`;

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
  getSongList(params) {
    const url = `/audios/song-list`;
    return axiosClients.get(url, { params });
  },
};
export default audiosApi;
