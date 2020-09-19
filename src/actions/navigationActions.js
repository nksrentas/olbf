export const SET_ACTIVE_LINK = 'SET_ACTIVE_LINK';
export const SET_ACTIVE_LINK_404 = 'SET_ACTIVE_LINK_404';

export const setActiveLink = (payload) => {
  console.log(payload);
  return payload.title
    ? {
        type: SET_ACTIVE_LINK,
        payload,
      }
    : {
        type: SET_ACTIVE_LINK_404,
        payload,
      };
};
