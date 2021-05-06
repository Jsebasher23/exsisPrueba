import { Store, Action, combineReducers } from '@ngrx/store';
import { SERVFAIL } from 'dns';

export interface Programa {
    id: number    
}

export const SET = 'SET';
export const RESET = 'RESET';

export const programaReducer = (state: Programa = null, action: Action) => {
    action.type === SET ? {
        ...state,
        type: action.type        
    } : action.type === RESET ? null : state;

    const rootReducer = combineReducers({
        id : programaReducer
    });

    
}
