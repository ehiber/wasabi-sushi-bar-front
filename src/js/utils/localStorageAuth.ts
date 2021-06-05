import { SignUpFormValues } from '../hooks/auth/useSignup';
import { RanchesFormValues } from '../hooks/ranches/useCreateRanches';

export const removeLocalStorage = () => {
  window.localStorage.removeItem('signUp-step-1');
  window.localStorage.removeItem('signUp-step-2');
  window.localStorage.removeItem('signUp-step-3');
};

export const getAuthInfoStorage = () => {
  const signUpString = window.localStorage.getItem('signUp-step-1');
  const ranchString = window.localStorage.getItem('signUp-step-2');

  const signUp: SignUpFormValues = signUpString && JSON.parse(signUpString);
  const ranch: RanchesFormValues = ranchString && JSON.parse(ranchString);

  return { signUp, ranch };
};
