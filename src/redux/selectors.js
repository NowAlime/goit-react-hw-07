export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.status === "loading";
export const selectError = (state) => state.contacts.error;
export const selectNameFilter = (state) => state.filters.name;
