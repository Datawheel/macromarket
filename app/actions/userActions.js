import api from "../api.js";

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

function requestSaveUser() {
  return {
    type: "SAVE_USER_PENDING"
  };
}

function receiveSaveUser(json) {
  return {
    type: "SAVE_USER_FULFILLED",
    data: json
  };
}

function saveUserError(json) {
  return {
    type: "SAVE_USER_REJECTED",
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

  return function(dispatch) {
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
          saveCompany(company)(dispatch);
        })
        .catch(response => {
          dispatch(saveError(response.data));
        });
    } else {
      saveCompany(company)(dispatch);
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
    } else {
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

export function updateUser(id, email, password) {
  return function(dispatch) {
    dispatch(requestSaveUser());
    return api.post(`/api/updateUser/${id}`, {
      email,
      password
    })
    .then(response => {
      dispatch(receiveSaveUser(response.data));
    })
    .catch(response => {
      dispatch(saveUserError(response.data));
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
