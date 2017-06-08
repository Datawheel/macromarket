export default (state = {
  trades: null,
  caTrades: null,
  profileTrades: null,
  loading: false,
  saved: false,
  settingsTrades: null
}, action) => {
  switch (action.type) {
    case "CREATE_TRADE_FULFILLED":
      return { ...state,
        saved: true
      };
    case "CREATE_TRADE_REJECTED":
      return { ...state,
        saved: false,
        error: action.data
      };
      case "DELETE_TRADE_FULFILLED":
        return { ...state,
          saved: true
        };
      case "DELETE_TRADE_REJECTED":
        return { ...state,
          saved: false,
          error: action.data
        };
    case "PROFILE_TRADES_PENDING":
      return { ...state,
        profileTrades: null,
        loading: true
      };
    case "PROFILE_TRADES_FULFILLED":
      return { ...state,
        loading: false,
        profileTrades: action.data
      };
    case "PROFILE_TRADES_REJECTED":
      return { ...state,
        loading: false,
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
      case "CA_TRADES_PENDING":
        return { ...state,
          caTrades: null,
          loading: true
        };
      case "CA_TRADES_FULFILLED":
        return { ...state,
          loading: false,
          caTrades: action.data
        };
      case "CA_TRADES_REJECTED":
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
