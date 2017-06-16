import api from "../api.js";
import {spread} from "axios";

function requestSave() {
  return {
    type: "SAVE_PENDING"
  };
}

function receiveSave(json) {
  return {
    type: "SAVE_FULFILLED",
    data: json
  };
}

function saveError(json) {
  return {
    type: "SAVE_REJECTED",
    data: json
  };
}

function requestDelete() {
  return {
    type: "DELETE_PENDING"
  };
}

function receiveDelete(json) {
  return {
    type: "DELETE_FULFILLED",
    data: json
  };
}

function deleteError(json) {
  return {
    type: "DELETE_REJECTED",
    data: json
  };
}

export function uploadImage(company, imagesToUpload) {
  const formData = new FormData();
  formData.append("profile_pic", imagesToUpload.profile_image);
  formData.append("cover_pic", imagesToUpload.cover_image);

  return dispatch => {
    dispatch(requestSave());
    if (imagesToUpload.profile_image || imagesToUpload.cover_image) {
      return api.post("api/upload", formData)
        .then(response => {
          if (response.data.profile) {
            company.profile_image = response.data.profile;
          }
          if (response.data.cover) {
            company.cover_image = response.data.cover;
          }
          return saveCompany(company)(dispatch);
        })
        .catch(response => {
          dispatch(saveError(response.data));
        });
    }
    else {
      return saveCompany(company)(dispatch);
    }
  };
}

export function saveCompany(company) {
  return function(dispatch) {
    if (company.id) {
      return api.put(`api/companies/${company.id}`, company)
        .then(response => {
          dispatch(receiveSave(response.data));
        })
        .catch(response => {
          dispatch(saveError(response.data));
        });
    }
    else {
      return api.post("api/companies", company)
        .then(response => {
          dispatch(receiveSave(response.data));
        })
        .catch(response => {
          console.log(response, "errr");
          dispatch(saveError(response.data));
        });
    }
  };
}

export function saveCompany2(company, profileImage = null, coverImage = null) {

  const config = {
    header: {
      "content-type": "multipart/form-data"
    }
  };

  return dispatch => {
    const apiCall = company.id
      ? api.put(`api/companies/${company.id}`, company)
      : api.post("api/companies", company);
    return apiCall
      .then(response => {
        const dataProfile = new FormData();
        dataProfile.append("image", profileImage);
        const dataCover = new FormData();
        dataCover.append("image", coverImage);

        const imageUploadUrl = `api/companies/${response.data.id}/image?type=`;

        const promises = [
          api.post(`${imageUploadUrl}profile`, dataProfile, config),
          api.post(`${imageUploadUrl}cover`, dataCover,  config)
        ];
        api.all(promises).then(() => dispatch(receiveSave(response.data.id)));
      })
      .catch(response => {
        console.log("\n\n\n ERROR!", response)
        dispatch(saveError(response.data));
      });
  };
}


export function deleteCompany(id) {
  return function(dispatch) {
    dispatch(requestDelete());
    return api.delete(`api/companies/${id}`)
      .then(response => {
        dispatch({
          type: "TRADES_FULFILLED",
          data: null
        });
        dispatch(receiveDelete(response.data));
      }).catch(response => {
        dispatch(deleteError(response.data));
      });
  };
}
