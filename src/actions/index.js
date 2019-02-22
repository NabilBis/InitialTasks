export const selectLibraryItem = (libraryId) => {
  //console.log("selectLibraryItem",libraryId);

  return {
    type: 'select_library_item',
    payload: libraryId
  };
};
