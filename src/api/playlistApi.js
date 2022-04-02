import axiosClients from './axiosClient';   
const playlistApi = {
  getNewPlaylist(params) {
    const url = `/playlist/new-list`;
    return axiosClients.get(url,{params});
  },
  getSongFromPlaylist(params) {
    const url = `/playlist/song-list/${params.playlistId}`;
    return axiosClients.get(url);
  },
  getPlayistDetail(params){
    const url = `/playlist/detail/${params.playlistId}`;
    return axiosClients.get(url);
  }

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
export default playlistApi;
