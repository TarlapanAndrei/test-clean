import LanguageActionType from './language.type';
import roRuEn from './LANGUAGES_DATA';
const INITIAL_STATE = {
  allLanguage: roRuEn,
  language:'romana',
};
const languageReducer = (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case LanguageActionType.LANGUAGE_STATUS_RO:
      return{
        ...state,
        language:'romana',
      }
    case LanguageActionType.LANGUAGE_STATUS_RU:
        return{
          ...state, 
          language:'russian',
        }
    default: return state;
  }
}
export default languageReducer;