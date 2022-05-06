import React from 'react';
import { View } from 'react-native';
import TextInputComponent from '../../../Components/TextInputComponent';
import WrapperContainer from '../../../Components/WrapperContainer';
import en from '../../../constants/lang/en';
import colors from '../../../styles/colors';
import { styles } from './style';
function Search() {
  return (
    <WrapperContainer>
      <View
        style={styles?.inputView}>
        <TextInputComponent
          placeholderTextColor={colors?.white}
          longText={true}
  
          righttext={en.ENTER_LOCATION_MANUALLY}
          value={null}
          inputViewstyle={styles.inputTextCss}
        />
      </View>
    </WrapperContainer>
  );
}

export default Search;
