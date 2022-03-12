import axiosClients from './axiosClient';   

const artistApi = {
  getArtistDetail(params) {
    const url = `/artist/detail/${params.artistId}`;
    return axiosClients.get(url);
  },
  getSong(params){
    const url = `/audios/song/${params.songId}`;
    return axiosClients.get(url);
  }


};
export default artistApi;
