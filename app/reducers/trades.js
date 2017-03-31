export default (state = {
  trades: null,
  loading: false,
  saved: false,
  settingsTrades: null
}, action) => {
  switch (action.type) {
    case "SAVE_TRADES_FULFILLED":
      return { ...state,
        saved: true
      };
    case "SAVE_TRADES_REJECTED":
      return { ...state,
        saved: false,
        error: action.data
      };
    case "TRADES_PENDING":
      return { ...state,
        trades: null,
        loading: true
      };
    case "TRADES_FULFILLED":
      return { ...state,
        loading: false,
        trades: action.data
      };
    case "TRADES_REJECTED":
      return { ...state,
        loading: false,
        error: action.data
      };
    case "SETTINGS_TRADES_PENDING":
      return { ...state,
        settingsTrades: null,
        loading: true
      };
    case "SETTINGS_TRADES_FULFILLED":
      return { ...state,
        loading: false,
        settingsTrades: action.data
      };
    case "SETTINGS_TRADES_REJECTED":
      return { ...state,
        loading: false,
        error: action.data
      };
    default:
      return state;
  }
};
