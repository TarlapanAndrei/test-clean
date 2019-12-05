import { createSelector } from 'reselect';

const selectLang = state => state.rootlanguage;

export const selectCurrentLang = createSelector(
  [selectLang],
  rootlanguage => rootlanguage.allLanguage
)
export const selectLanguage = createSelector(
  [selectLang],
  rootlanguage => rootlanguage.language
)