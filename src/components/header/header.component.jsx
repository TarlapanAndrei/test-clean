import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { selectCurrentLang, selectLanguage } from '../../redux/language/language.selectors';


import { HeaderContainer, OrdinarButton, LanguageDivContainer, LanguageDiv, OrdinarLink, CallNowButton} from './header.styled';
import md from './header-images/md.png';
import ru from './header-images/ru.png';
import { changeToRo, changeToRu} from '../../redux/language/language.actions';

const Header = ({languageBlock, currentLanguage, changeToRo, changeToRu}) =>{
  const finaleLang = languageBlock[currentLanguage]
  const { contact, home, services} = finaleLang.header;
  return(
  <HeaderContainer >
    <OrdinarLink to='/'>
     <h2>{home}</h2>
    </OrdinarLink>
    <OrdinarLink>
    <h2>{services}</h2>
    </OrdinarLink>
    <OrdinarLink to='/contacts'>
    <h2>{contact}</h2>
    </OrdinarLink>
    <CallNowButton>
    <a href="tel:+373 (684) 559 99"><div className="divTel"></div></a>
    </CallNowButton>
    <OrdinarButton>
    <h2><a href='https://facebook.com'>Facebook</a></h2>
    </OrdinarButton>
    <OrdinarButton>
    <LanguageDivContainer>
   { currentLanguage !== 'romana'? (<LanguageDiv onClick={changeToRo}>
      <img src={md} alt='romanian' title='rom' />
    </LanguageDiv>) :
    (<LanguageDiv onClick={changeToRu}>
      <img src={ru} alt='russian' title='rus' />
    </LanguageDiv>)}
  </LanguageDivContainer>
    </OrdinarButton>
  </HeaderContainer>
)}
const mapStateToProps = createStructuredSelector({
  languageBlock : selectCurrentLang,
  currentLanguage: selectLanguage,
})
const mapDispatchToProps = dispatch =>({
  changeToRo: ()=>dispatch(changeToRo()),
  changeToRu: ()=>dispatch(changeToRu())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);