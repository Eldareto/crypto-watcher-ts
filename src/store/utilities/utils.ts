export const updateObj = <S, U>(state: S, updateStateProps: U) => {
  return {
    ...state,
    ...updateStateProps,
  };
};
