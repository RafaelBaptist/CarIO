export type NavigatorParamList = {
  ['OnBoardingScreen']: undefined;
  ['OnBoardingScreenTwo']: undefined;
  ['SignInScreen']: undefined;
  ['SignUpScreen']: undefined;
  ['ResetScreen']:undefined;
  ['VerifyScreen']:undefined;
  ['OtpScreen']:undefined;
  ['HomeScreen']:undefined; 
};

export type ScreenName = keyof NavigatorParamList;
