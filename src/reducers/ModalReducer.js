export const initialState = {
  isOpen: false,
  selectedId: null,
  
};

export function modalReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        isOpen: true,
        selectedId: action.payload,
      };

    case "CLOSE_MODAL":
      return {
        isOpen: false,
        selectedId: null,
      };

    default:
      return state;
  }
}
