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

  //   getById(id) {
  //     const url = `/posts/${id}`;
  //     return axiosClients.get(url);
  //   },

  //   add(data) {
  //     const url = '/posts';
  //     return axiosClients.post(url, data);
  //   },

  //   update(data) {
  //     const url = `/posts/${data.id}`;
  //     return axiosClients.put(url, data);
  //   },

  //   remove(id) {
  //     const url = `/posts/${id}`;
  //     return axiosClients.delete(url);
  //   },
};
export default audiosApi;
