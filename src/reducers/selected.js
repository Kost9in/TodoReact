export default (state = [], action) => {
  switch (action.type) {
    case 'SELECT_ITEMS':
      let selected = [...state];
      if (typeof action.config === 'undefined') selected = [];
      else {
        if (action.config.type === 'multiple') {
          const indexOf = selected.indexOf(action.config.start);
          if (indexOf !== -1) selected.splice(indexOf, 1);
          else selected.push(action.config.start);
        } else if (action.config.type === 'range') {
          if (selected.length) {
            let end = selected[0];
            selected = [];
            while (end !== action.config.start) {
              selected.push(end);
              if (end > action.config.start) end--;
              else end++;
            }
            selected.push(action.config.start);
          } else {
            selected = [action.config.start];
          }
        } else {
          if (selected.indexOf(action.config.start) !== -1 && selected.length === 1) selected = [];
          else selected = [action.config.start];
        }
      }
      return selected;
    default:
      return state;
  }
};
