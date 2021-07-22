export const generateActions = (action: string) => [
  `${action}_START`,
  `${action}_SUCCESS`,
  `${action}_FAIL`,
];
