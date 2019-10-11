
export default function reducer(state = { numero: 0, mensaje: '' }, action) {
    switch (action.type) { // action = {type: 'SUMAR'}
      case 'SUMAR':
        let numSumado = state.numero + 1;
        return { ...state, numero: numSumado, mensaje: 'SUMADO DESDE EL REDUCER'  };
      case 'RESTAR':
        return { ...state, numero: state.numero-1, mensaje: 'RESTADO DESDE EL REDUCER'  };
      default:
        return state;
    }
  }
  
  export function sumar() {
    return {
      type: 'SUMAR',
    };
  }

  export function restar() {
    return {
      type: 'RESTAR',
    };
  }