let navigateFn: ((path: string) => void) | null = null;

export const setNavigator = (navigate: (path: string) => void) => {
  navigateFn = navigate;
};

export const navigateToLogin = () => {
  if (navigateFn) {
    navigateFn("/login");
  } else {
    window.location.replace("/login");
  }
};
