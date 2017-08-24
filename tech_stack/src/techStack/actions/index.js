/**
 * Created Date: Thursday, August 24th 2017, 12:30:22 pm
 * Author: Julien Saito
 * -----
 * Last Modified: Thu Aug 24 2017
 * Modified By: Julien Saito
 * -----
 * This is an action creator, it returns an action of type 'select_library'
 * think of this as an action factory 
 * that will update all reducers, saying 'hey the libraryId has been selected!'
 * -----
 * Copyright (c) 2017 CoInspect
 * ------------------------------------
 */


export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        libraryId: libraryId
    };
};