const receivedItems = [];
import action from "./actions";
const AdminReducer = (state = receivedItems, action) => {
  switch (action.type) {
    case "RECEIVE_ITEM":
      const itemToReceive = action.payload;
      return { ...state, receivedItems: itemToReceive };
    default:
      return state;
  }
};

export default AdminReducer;
